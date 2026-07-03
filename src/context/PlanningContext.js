'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { recipes } from '../data/recipes'
import { getVersionIdx, calcMacros } from '../data/macroCalc'
import { scaleRecipe, computeVersionMacros } from '../data/scaleRecipe'
import { supabase } from '@/utils/supabaseClient'

const PlanningContext = createContext()

const DAYS  = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const WEEKS = [1, 2, 3, 4]

function weekKey(w) {
  if (!WEEKS.includes(Number(w))) throw new Error(`Semaine invalide : ${w}`)
  return `s${w}`
}

// ─── REPAS DYNAMIQUES ────────────────────────────────────────────────────────
// Ordre affiché dans la grille :
// Petit-déjeuner → Déjeuner → Dessert (si activé) → Goûter (si activé) → Dîner → Dessert dîner (si activé)
function getMealsForUser(quizData) {
  const meals = []
  if ((quizData?.petit_dej ?? 'oui') !== 'non') meals.push('Petit-déjeuner')
  meals.push('Déjeuner')
  if ((quizData?.dessert   ?? 'non') !== 'non') meals.push('Dessert')
  if ((quizData?.gouter    ?? 'non') !== 'non') meals.push('Goûter')
  meals.push('Dîner')
  if ((quizData?.dessert   ?? 'non') !== 'non') meals.push('Dessert dîner')
  return meals
}

// Vérifie que le planning sauvegardé a exactement les repas attendus.
// Si la structure a changé (ex : dessert ajouté), force une régénération.
function planningHasExpectedMeals(weekPlanning, expectedMeals) {
  const firstDay = DAYS.find(d => weekPlanning[d])
  if (!firstDay) return false
  return expectedMeals.every(m => weekPlanning[firstDay][m] !== undefined)
}

// ─── RÉGIMES ─────────────────────────────────────────────────────────────────
const REGIME_BANNED = {
  'halal': [
    'porc', 'jambon', 'lard', 'lardons', 'bacon', 'chorizo',
    'alcool', 'vin', 'bière', 'gélatine',
  ],
  'vegetarien': [
    'poulet', 'dinde', 'bœuf', 'porc', 'jambon', 'lardons', 'chorizo',
    'saumon', 'thon', 'crevette', 'cabillaud', 'anchois',
  ],
  'vegan': [
    'poulet', 'dinde', 'bœuf', 'porc', 'jambon', 'lardons', 'chorizo',
    'saumon', 'thon', 'crevette', 'cabillaud', 'anchois',
    'oeufs', 'emmental', 'feta', 'cheddar', 'parmesan', 'mozzarella', 'ricotta',
    'mascarpone', 'skyr', 'yaourt', 'fromage',
    'crème fraîche', 'beurre', 'lait entier',
    'miel', 'protéines vanille', 'protéines chocolat', 'pâte à tartiner',
  ],
  'sans-gluten': [
    'pain', 'pain complet', 'pain brioche', 'farine', 'farine complète',
    'pâtes', 'semoule', 'couscous', 'tortilla', 'tortilla blé',
    'flocons avoine', 'granola', 'biscuits cuillère', 'sauce soja',
  ],
  'sans-lactose': [
    'emmental', 'feta', 'cheddar', 'parmesan', 'mozzarella', 'ricotta',
    'mascarpone', 'skyr', 'yaourt', 'fromage',
    'crème fraîche', 'beurre', 'lait entier',
    'protéines vanille', 'protéines chocolat', 'pâte à tartiner',
  ],
}

function versionViolatesRegime(version, regime) {
  if (!regime || regime === 'aucun') return false
  const banned = REGIME_BANNED[regime]
  if (!banned) return false
  return version.ing.some(ing =>
    banned.some(kw => ing.name.toLowerCase().includes(kw.toLowerCase()))
  )
}

function getCompatibleVersionIndices(recipe, regime) {
  return recipe.versions.map((_, i) => i).filter(i => !versionViolatesRegime(recipe.versions[i], regime))
}

function recipeHasCompatibleVersion(recipe, regime) {
  return getCompatibleVersionIndices(recipe, regime).length > 0
}

function recipeHasEvite(recipe, evites) {
  if (!evites.length) return false
  return recipe.versions.some(v =>
    v.ing.some(ing => evites.some(e => ing.name.toLowerCase().includes(e)))
  )
}

// ─── CONTRAINTE VERSION PAR OBJECTIF ─────────────────────────────────────────
// 0 = Light | 1 = Classique | 2 = Volume
// perte → max Classique | muscu → min Classique | autres → tout
// Dessert : toujours Light ou Classique (c'est un dessert, pas un repas principal)
function getGoalVersionRange(goal, isDessert = false) {
  if (isDessert) return { min: 0, max: 1 }
  if (goal === 'perte' || goal === 'fit') return { min: 0, max: 1 }
  if (goal === 'muscu')                   return { min: 1, max: 2 }
  return { min: 0, max: 2 }
}

function filterByGoal(indices, goal, isDessert = false) {
  const { min, max } = getGoalVersionRange(goal, isDessert)
  const filtered = indices.filter(i => i >= min && i <= max)
  return filtered.length > 0 ? filtered : indices
}

// ─── HELPERS MACRO ───────────────────────────────────────────────────────────
function macroError(totals, target) {
  const safe = t => Math.abs(t) > 0 ? Math.abs(t) : 1
  return (
    ((totals.calories  - target.calories)  / safe(target.calories)  * 1.5) ** 2 +
    ((totals.proteines - target.proteines) / safe(target.proteines) * 1.5) ** 2 +
    ((totals.glucides  - target.glucides)  / safe(target.glucides)  * 1.0) ** 2 +
    ((totals.lipides   - target.lipides)   / safe(target.lipides)   * 1.0) ** 2
  )
}

function macroDistance(m, target) {
  const safe = t => t > 0 ? t : 1
  return Math.sqrt(
    ((m.calories  - target.cal) / safe(target.cal)  * 1.5) ** 2 +
    ((m.proteines - target.p)   / safe(target.p)    * 1.5) ** 2 +
    ((m.glucides  - target.g)   / safe(target.g)    * 1.0) ** 2 +
    ((m.lipides   - target.l)   / safe(target.l)    * 1.0) ** 2
  )
}

function isWithinTolerance(totals, target) {
  const safe = t => t > 0 ? t : 1
  return (
    Math.abs(totals.calories  - target.calories)  / safe(target.calories)  <= 0.10 &&
    Math.abs(totals.proteines - target.proteines) / safe(target.proteines) <= 0.15 &&
    Math.abs(totals.glucides  - target.glucides)  / safe(target.glucides)  <= 0.20 &&
    Math.abs(totals.lipides   - target.lipides)   / safe(target.lipides)   <= 0.20
  )
}

// ─── RÉÉQUILIBRAGE HEBDOMADAIRE ──────────────────────────────────────────────
function rebalanceWeek(planning, macrosData, meals, regime) {
  if (!macrosData) return planning

  const weeklyTarget = {
    calories:  macrosData.calories  * 7,
    proteines: macrosData.proteines * 7,
    glucides:  macrosData.glucides  * 7,
    lipides:   macrosData.lipides   * 7,
  }

  const result = {}
  DAYS.forEach(d => {
    result[d] = {}
    meals.forEach(m => { result[d][m] = { ...planning[d][m] } })
  })

  const cache = {}
  DAYS.forEach(d => {
    meals.forEach(m => {
      const slot = result[d][m]
      if (!slot) return
      const recipe = recipes.find(r => r.id === slot.recipeId)
      if (!recipe) return
      let indices = getCompatibleVersionIndices(recipe, regime)
      if (!indices.length) indices = recipe.versions.map((_, i) => i)
      cache[`${d}-${m}`] = {
        indices,
        macros: indices.map(i => computeVersionMacros(recipe.versions[i])),
      }
    })
  })

  let totals = { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
  DAYS.forEach(d => {
    meals.forEach(m => {
      const c = cache[`${d}-${m}`]
      if (!c) return
      const pos = c.indices.indexOf(result[d][m].versionIdx)
      const mv = pos >= 0 ? c.macros[pos] : c.macros[0]
      if (!mv) return
      totals.calories  += mv.calories
      totals.proteines += mv.proteines
      totals.glucides  += mv.glucides
      totals.lipides   += mv.lipides
    })
  })

  for (let iter = 0; iter < 6; iter++) {
    if (isWithinTolerance(totals, weeklyTarget)) break
    let improved = false
    DAYS.forEach(d => {
      meals.forEach(m => {
        const slot = result[d][m]
        const c = cache[`${d}-${m}`]
        if (!c || c.indices.length <= 1 || slot?.liked) return
        const currentPos = c.indices.indexOf(slot.versionIdx)
        const currentMv = currentPos >= 0 ? c.macros[currentPos] : null
        if (!currentMv) return
        const currentError = macroError(totals, weeklyTarget)
        let bestPos = currentPos
        let bestError = currentError
        c.macros.forEach((vMacros, pos) => {
          if (pos === currentPos) return
          const sim = {
            calories:  totals.calories  - currentMv.calories  + vMacros.calories,
            proteines: totals.proteines - currentMv.proteines + vMacros.proteines,
            glucides:  totals.glucides  - currentMv.glucides  + vMacros.glucides,
            lipides:   totals.lipides   - currentMv.lipides   + vMacros.lipides,
          }
          const err = macroError(sim, weeklyTarget)
          if (err < bestError) { bestError = err; bestPos = pos }
        })
        if (bestPos !== currentPos) {
          const newMv = c.macros[bestPos]
          totals.calories  += newMv.calories  - currentMv.calories
          totals.proteines += newMv.proteines - currentMv.proteines
          totals.glucides  += newMv.glucides  - currentMv.glucides
          totals.lipides   += newMv.lipides   - currentMv.lipides
          result[d][m] = { ...slot, versionIdx: c.indices[bestPos] }
          improved = true
        }
      })
    })
    if (!improved) break
  }

  return result
}

// ─── GÉNÉRATION ──────────────────────────────────────────────────────────────
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

function generateWeek(quizData, macrosData) {
  const planning     = {}
  const evites       = (quizData?.aliments_evites || []).map(s => s.toLowerCase())
  const aimes        = (quizData?.aliments_aimes  || []).map(s => s.toLowerCase())
  const regime       = quizData?.regime        || 'aucun'
  const goal         = quizData?.goal          || 'maintien'
  const petitDejType = quizData?.petit_dej_type || 'sucre'
  const gouterType   = quizData?.gouter_type    || 'sucre'
  const meals        = getMealsForUser(quizData)
  const batchCooking = quizData?.batch_cooking  || 'non'
  const batchRepas   = quizData?.batch_repas    || []
  const wantsBatch   = batchCooking === 'oui' || batchCooking === 'parfois'

  const mealTargets = macrosData ? {
    cal: macrosData.calories  / meals.length,
    p:   macrosData.proteines / meals.length,
    g:   macrosData.glucides  / meals.length,
    l:   macrosData.lipides   / meals.length,
  } : null

  function bestVersionForRecipe(recipe, isDessert = false) {
    let candidates = getCompatibleVersionIndices(recipe, regime)
    if (!candidates.length) candidates = recipe.versions.map((_, i) => i)
    candidates = filterByGoal(candidates, goal, isDessert)
    if (!mealTargets) {
      const preferred = isDessert ? 0 : getVersionIdx(goal)
      const idx = candidates.includes(preferred) ? preferred : candidates[Math.floor(candidates.length / 2)]
      return { idx, distance: 0 }
    }
    let bestIdx = candidates[0]
    let bestDist = Infinity
    candidates.forEach(i => {
      const d = macroDistance(computeVersionMacros(recipe.versions[i]), mealTargets)
      if (d < bestDist) { bestDist = d; bestIdx = i }
    })
    return { idx: bestIdx, distance: bestDist }
  }

  function likedScore(recipe) {
    if (!aimes.length) return 0
    return Math.max(0, ...recipe.versions.map(v =>
      v.ing.filter(ing => aimes.some(a => ing.name.toLowerCase().includes(a))).length
    ))
  }

  function rankPool(pool, wantsBatchForMeal = false, isDessert = false) {
    const safe = pool.filter(r => !recipeHasEvite(r, evites))
    const active = safe.length > 0 ? safe : pool
    return shuffle(active)
      .map(r => ({
        recipe: r,
        ...bestVersionForRecipe(r, isDessert),
        liked:      likedScore(r),
        batchBonus: wantsBatchForMeal && r.tags.includes('batch') ? 1 : 0,
      }))
      .sort((a, b) => {
        const dd = a.distance - b.distance
        if (Math.abs(dd) < 0.05) {
          if (a.batchBonus !== b.batchBonus) return b.batchBonus - a.batchBonus
          return b.liked - a.liked
        }
        return dd
      })
  }

  function getBreakfastRanked() {
    let pool
    if (petitDejType === 'sale') {
      pool = recipes.filter(r => (r.repas || []).includes('petit-dej') && r.cat === 'sale' && recipeHasCompatibleVersion(r, regime))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sale' && recipeHasCompatibleVersion(r, regime))
    } else if (petitDejType === 'mixte') {
      pool = recipes.filter(r => (r.repas || []).includes('petit-dej') && recipeHasCompatibleVersion(r, regime))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    } else {
      pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    }
    if (!pool.length) pool = recipes.filter(r => recipeHasCompatibleVersion(r, regime))
    return rankPool(pool, wantsBatch && batchRepas.includes('petit-dej'))
  }

  function getGouterRanked() {
    let pool
    if (gouterType === 'sale') {
      pool = recipes.filter(r => (r.repas || []).includes('gouter') && r.cat === 'sale' && recipeHasCompatibleVersion(r, regime))
    } else if (gouterType === 'mixte') {
      pool = recipes.filter(r => (r.repas || []).includes('gouter') && recipeHasCompatibleVersion(r, regime))
    } else {
      pool = recipes.filter(r => (r.repas || []).includes('gouter') && r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    }
    if (!pool.length) pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    if (!pool.length) pool = recipes.filter(r => recipeHasCompatibleVersion(r, regime))
    return rankPool(pool, wantsBatch && batchRepas.includes('gouter'))
  }

  // Dessert : toujours sucré, versions Light/Classique uniquement
  function getDessertRanked() {
    let pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    if (!pool.length) pool = recipes.filter(r => recipeHasCompatibleVersion(r, regime))
    return rankPool(pool, false, true) // isDessert = true
  }

  function getLunchDinnerRanked() {
    let pool = recipes.filter(r => r.cat === 'sale' && recipeHasCompatibleVersion(r, regime))
    if (!pool.length) pool = recipes.filter(r => recipeHasCompatibleVersion(r, regime))
    const batchWanted = wantsBatch && (batchRepas.includes('dejeuner') || batchRepas.includes('diner'))
    return rankPool(pool, batchWanted)
  }

  function assignSlots(ranked, count) {
    if (!ranked.length) return []
    const out = []
    const usedInCycle = new Set()
    let idx = 0
    for (let i = 0; i < count; i++) {
      let pick = null
      for (let j = 0; j < ranked.length; j++) {
        const c = ranked[(idx + j) % ranked.length]
        if (!usedInCycle.has(c.recipe.id)) {
          pick = c
          idx = (idx + j + 1) % ranked.length
          break
        }
      }
      if (!pick) {
        usedInCycle.clear()
        pick = ranked[idx % ranked.length]
        idx = (idx + 1) % ranked.length
      }
      usedInCycle.add(pick.recipe.id)
      out.push(pick)
    }
    return out
  }

  const hasBreakfast = meals.includes('Petit-déjeuner')
  const hasDessert    = meals.includes('Dessert')
  const hasGouter     = meals.includes('Goûter')
  const mainCount     = meals.filter(m => m === 'Déjeuner' || m === 'Dîner').length

  const breakfastAssign    = hasBreakfast ? assignSlots(getBreakfastRanked(), DAYS.length) : []
  const dessertAssign      = hasDessert   ? assignSlots(getDessertRanked(),   DAYS.length) : []
  const dessertDinerAssign = hasDessert   ? assignSlots(getDessertRanked(),   DAYS.length) : []
  const gouterAssign       = hasGouter    ? assignSlots(getGouterRanked(),    DAYS.length) : []
  const mainAssign         = assignSlots(getLunchDinnerRanked(), mainCount * DAYS.length)

  let bIdx = 0, dIdx = 0, ddIdx = 0, gIdx = 0, mIdx = 0
  DAYS.forEach(day => {
    planning[day] = {}
    meals.forEach(meal => {
      let pick
      if (meal === 'Petit-déjeuner') pick = breakfastAssign[bIdx++]
      else if (meal === 'Dessert')        pick = dessertAssign[dIdx++]
      else if (meal === 'Dessert dîner')  pick = dessertDinerAssign[ddIdx++]
      else if (meal === 'Goûter')    pick = gouterAssign[gIdx++]
      else                           pick = mainAssign[mIdx++]
      if (!pick) return
      planning[day][meal] = { recipeId: pick.recipe.id, versionIdx: pick.idx, liked: false, note: '' }
    })
  })

  return rebalanceWeek(planning, macrosData, meals, regime)
}

function generateAllWeeks(quizData, macrosData) {
  return {
    s1: generateWeek(quizData, macrosData),
    s2: generateWeek(quizData, macrosData),
    s3: generateWeek(quizData, macrosData),
    s4: generateWeek(quizData, macrosData),
  }
}

// Calcule la moyenne de calories/jour sur la semaine active
function computeWeeklyCalAvg(planning, meals) {
  if (!planning) return null
  let total = 0
  DAYS.forEach(day => {
    meals.forEach(meal => {
      const slot = planning[day]?.[meal]
      if (!slot) return
      const recipe = recipes.find(r => r.id === slot.recipeId)
      if (!recipe || !recipe.versions[slot.versionIdx]) return
      total += computeVersionMacros(recipe.versions[slot.versionIdx]).calories
    })
  })
  return Math.round(total / DAYS.length)
}

function isLegacyFormat(data) {
  return data && typeof data === 'object' && DAYS.some(d => d in data)
}

// ─── SLOTS NON VALIDÉS ───────────────────────────────────────────────────────
function getOrderedNonValidatedSlots(day, meal, planning, meals) {
  const dayIdx = DAYS.indexOf(day)
  const slots = []
  meals.forEach(m => {
    if (m !== meal && !planning[day][m]?.liked) slots.push({ day, meal: m })
  })
  for (let i = 1; i < DAYS.length; i++) {
    const nextIdx = dayIdx + i
    if (nextIdx >= DAYS.length) break
    const d = DAYS[nextIdx]
    meals.forEach(m => { if (!planning[d][m]?.liked) slots.push({ day: d, meal: m }) })
  }
  for (let i = 1; i <= dayIdx; i++) {
    const d = DAYS[dayIdx - i]
    meals.forEach(m => { if (!planning[d][m]?.liked) slots.push({ day: d, meal: m }) })
  }
  return slots
}

async function saveToDB(allPlannings) {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return
  await supabase
    .from('user_planning')
    .upsert({
      user_id:    session.user.id,
      planning:   allPlannings,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' })
}

// ─── PROVIDER ────────────────────────────────────────────────────────────────
export function PlanningProvider({ children }) {
  const [allPlannings, setAllPlannings] = useState(null)
  const [activeWeek,   setActiveWeekRaw] = useState(1)
  const [quizData,     setQuizData]     = useState(null)
  const [quizLoaded,   setQuizLoaded]   = useState(false)
  const [macros,       setMacros]       = useState(null)
  const [personnes,    setPersonnes]    = useState(1)

  function setActiveWeek(w) {
    const n = Number(w)
    if (WEEKS.includes(n)) setActiveWeekRaw(n)
  }

  const meals   = quizData ? getMealsForUser(quizData) : ['Petit-déjeuner', 'Déjeuner', 'Dîner']
  const wk      = weekKey(activeWeek)
  const planning = allPlannings?.[wk] ?? null

  function patchWeek(newWeekPlanning) {
    const next = { ...allPlannings, [wk]: newWeekPlanning }
    setAllPlannings(next)
    saveToDB(next)
  }

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { setQuizLoaded(true); return }

      const { data: quiz } = await supabase
        .from('user_quiz_results').select('*').eq('user_id', session.user.id).single()

      if (quiz) {
        setQuizData(quiz)
        setPersonnes(quiz.personnes || 1)
        setMacros(calcMacros({
          genre:        quiz.gender,
          poids:        quiz.weight,
          taille:       quiz.height,
          age:          quiz.age,
          sport:        quiz.activity,
          objectif:     quiz.goal,
          'cardio-pct': quiz.cardio_pct,
          pas:          quiz.pas,
        }))
      }

      const { data: saved } = await supabase
        .from('user_planning').select('planning').eq('user_id', session.user.id).single()

      if (saved?.planning && !isLegacyFormat(saved.planning)) {
        const hasAllWeeks = WEEKS.every(w => saved.planning[`s${w}`] && typeof saved.planning[`s${w}`] === 'object')
        if (hasAllWeeks) {
          // Vérifie que la structure des repas est à jour (ex : dessert ajouté après coup)
          const expectedMeals = getMealsForUser(quiz)
          const mealsMatch = planningHasExpectedMeals(saved.planning['s1'], expectedMeals)
          if (mealsMatch) setAllPlannings(saved.planning)
          // sinon : allPlannings reste null → useEffect régénère les 4 semaines
        }
      }

      setQuizLoaded(true)
    }
    load()
  }, [])

  useEffect(() => {
    if (quizLoaded && !allPlannings && quizData && macros) {
      const all = generateAllWeeks(quizData, macros)
      setAllPlannings(all)
      saveToDB(all)
    }
  }, [quizLoaded, quizData, allPlannings, macros])

  function initPlanning() {
    if (quizData && !allPlannings && macros) {
      const all = generateAllWeeks(quizData, macros)
      setAllPlannings(all)
      saveToDB(all)
    }
  }

  function regeneratePlanning() {
    if (!quizData || !macros || !allPlannings) return
    patchWeek(generateWeek(quizData, macros))
  }

  function buildCompensatedPlanning(prevPlanning, day, meal, chosenRecipeId, chosenVersionIdx) {
    const chosenRecipe = recipes.find(r => r.id === chosenRecipeId)
    if (!chosenRecipe || !macros) return { error: null, newPlanning: null }

    const regime       = quizData?.regime || 'aucun'
    const chosenMacros = computeVersionMacros(chosenRecipe.versions[chosenVersionIdx])

    const validatedMacros = { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
    DAYS.forEach(d => {
      meals.forEach(m => {
        if (d === day && m === meal) return
        if (!prevPlanning[d]?.[m]?.liked) return
        const r = recipes.find(rec => rec.id === prevPlanning[d][m].recipeId)
        if (!r) return
        const sm = computeVersionMacros(r.versions[prevPlanning[d][m].versionIdx])
        validatedMacros.calories  += sm.calories
        validatedMacros.proteines += sm.proteines
        validatedMacros.glucides  += sm.glucides
        validatedMacros.lipides   += sm.lipides
      })
    })

    const nonValidated = getOrderedNonValidatedSlots(day, meal, prevPlanning, meals)
    if (nonValidated.length === 0) return { error: 'all_validated', newPlanning: null }

    const weeklyTarget = {
      calories:  macros.calories  * 7,
      proteines: macros.proteines * 7,
      glucides:  macros.glucides  * 7,
      lipides:   macros.lipides   * 7,
    }

    const n = nonValidated.length
    const tgt = {
      cal: (weeklyTarget.calories  - validatedMacros.calories  - chosenMacros.calories)  / n,
      p:   (weeklyTarget.proteines - validatedMacros.proteines - chosenMacros.proteines) / n,
      g:   (weeklyTarget.glucides  - validatedMacros.glucides  - chosenMacros.glucides)  / n,
      l:   (weeklyTarget.lipides   - validatedMacros.lipides   - chosenMacros.lipides)   / n,
    }

    const newPlanning = {}
    DAYS.forEach(d => {
      newPlanning[d] = {}
      meals.forEach(m => { newPlanning[d][m] = { ...prevPlanning[d][m] } })
    })
    newPlanning[day][meal] = { ...prevPlanning[day][meal], recipeId: chosenRecipeId, versionIdx: chosenVersionIdx, liked: false }

    const safe = t => Math.abs(t) > 0 ? Math.abs(t) : 1
    nonValidated.forEach(slot => {
      const r = recipes.find(rec => rec.id === newPlanning[slot.day][slot.meal].recipeId)
      if (!r) return
      let candidates = getCompatibleVersionIndices(r, regime)
      if (!candidates.length) candidates = r.versions.map((_, i) => i)
      let bestIdx = candidates[0]
      let bestDist = Infinity
      candidates.forEach(i => {
        const mv = computeVersionMacros(r.versions[i])
        const dist = Math.sqrt(
          ((mv.calories  - tgt.cal) / safe(tgt.cal) * 1.5) ** 2 +
          ((mv.proteines - tgt.p)   / safe(tgt.p)  * 1.5) ** 2 +
          ((mv.glucides  - tgt.g)   / safe(tgt.g)  * 1.0) ** 2 +
          ((mv.lipides   - tgt.l)   / safe(tgt.l)  * 1.0) ** 2
        )
        if (dist < bestDist) { bestDist = dist; bestIdx = i }
      })
      newPlanning[slot.day][slot.meal] = { ...newPlanning[slot.day][slot.meal], versionIdx: bestIdx }
    })

    return { error: null, newPlanning }
  }

  function swapMeal(day, meal) {
    if (!planning) return
    const current      = planning[day][meal]
    const regime       = quizData?.regime        || 'aucun'
    const goal         = quizData?.goal          || 'maintien'
    const petitDejType = quizData?.petit_dej_type || 'sucre'
    const gouterType   = quizData?.gouter_type    || 'sucre'
    const evites       = (quizData?.aliments_evites || []).map(s => s.toLowerCase())
    const isMatin      = meal === 'Petit-déjeuner'
    const isGouter     = meal === 'Goûter'
    const isDessert    = meal === 'Dessert' || meal === 'Dessert dîner'

    const isValidBreakfast = r => {
      if (petitDejType === 'sale')  return (r.repas || []).includes('petit-dej') && r.cat === 'sale'
      if (petitDejType === 'mixte') return (r.repas || []).includes('petit-dej')
      return r.cat === 'sucre'
    }
    const isValidGouter = r => {
      if (gouterType === 'sale')  return (r.repas || []).includes('gouter') && r.cat === 'sale'
      if (gouterType === 'mixte') return (r.repas || []).includes('gouter')
      return (r.repas || []).includes('gouter') && r.cat === 'sucre'
    }

    let pool = []
    if (isMatin) {
      pool = recipes.filter(r => isValidBreakfast(r) && r.id !== current.recipeId && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => isValidBreakfast(r) && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => isValidBreakfast(r) && recipeHasCompatibleVersion(r, regime))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    } else if (isDessert) {
      pool = recipes.filter(r => r.cat === 'sucre' && r.id !== current.recipeId && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    } else if (isGouter) {
      pool = recipes.filter(r => isValidGouter(r) && r.id !== current.recipeId && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => isValidGouter(r) && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => isValidGouter(r) && recipeHasCompatibleVersion(r, regime))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sucre' && recipeHasCompatibleVersion(r, regime))
    } else {
      pool = recipes.filter(r => r.cat === 'sale' && r.id !== current.recipeId && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sale' && recipeHasCompatibleVersion(r, regime) && !recipeHasEvite(r, evites))
      if (!pool.length) pool = recipes.filter(r => r.cat === 'sale' && recipeHasCompatibleVersion(r, regime))
    }
    if (!pool.length) pool = recipes.filter(r => recipeHasCompatibleVersion(r, regime))
    if (!pool.length) return

    const mealTargets = macros ? {
      cal: macros.calories  / meals.length,
      p:   macros.proteines / meals.length,
      g:   macros.glucides  / meals.length,
      l:   macros.lipides   / meals.length,
    } : null

    let bestRecipe = pool[0]
    let bestVersionIdx = 0
    let bestDist = Infinity

    pool.forEach(r => {
      let candidates = getCompatibleVersionIndices(r, regime)
      if (!candidates.length) candidates = r.versions.map((_, i) => i)
      candidates = filterByGoal(candidates, goal, isDessert)
      candidates.forEach(i => {
        const mv = computeVersionMacros(r.versions[i])
        const safe = t => t > 0 ? t : 1
        const dist = mealTargets
          ? Math.sqrt(
              ((mv.calories  - mealTargets.cal) / safe(mealTargets.cal) * 1.5) ** 2 +
              ((mv.proteines - mealTargets.p)   / safe(mealTargets.p)  * 1.5) ** 2 +
              ((mv.glucides  - mealTargets.g)   / safe(mealTargets.g)  * 1.0) ** 2 +
              ((mv.lipides   - mealTargets.l)   / safe(mealTargets.l)  * 1.0) ** 2
            )
          : Math.abs(mv.calories - 300)
        if (dist < bestDist) { bestDist = dist; bestRecipe = r; bestVersionIdx = i }
      })
    })

    patchWeek({
      ...planning,
      [day]: { ...planning[day], [meal]: { ...current, recipeId: bestRecipe.id, versionIdx: bestVersionIdx, liked: false } },
    })
  }

  function likeMeal(day, meal) {
    if (!planning) return
    patchWeek({
      ...planning,
      [day]: { ...planning[day], [meal]: { ...planning[day][meal], liked: !planning[day][meal].liked } },
    })
  }

  function validateAll() {
    if (!planning) return
    const newWeek = {}
    DAYS.forEach(d => {
      newWeek[d] = {}
      meals.forEach(m => { newWeek[d][m] = { ...planning[d][m], liked: true } })
    })
    patchWeek(newWeek)
  }

  function setNote(day, meal, note) {
    if (!planning) return
    patchWeek({
      ...planning,
      [day]: { ...planning[day], [meal]: { ...planning[day][meal], note } },
    })
  }

  function changeVersion(day, meal, newVersionIdx, propagate) {
    if (!planning) return { error: null }
    if (!propagate) {
      patchWeek({ ...planning, [day]: { ...planning[day], [meal]: { ...planning[day][meal], versionIdx: newVersionIdx } } })
      return { error: null }
    }
    const { error, newPlanning } = buildCompensatedPlanning(planning, day, meal, planning[day][meal].recipeId, newVersionIdx)
    if (error) return { error }
    patchWeek(newPlanning)
    return { error: null }
  }

  function changeRecipe(day, meal, newRecipeId, newVersionIdx, propagate) {
    if (!planning) return { error: null }
    if (!propagate) {
      patchWeek({ ...planning, [day]: { ...planning[day], [meal]: { ...planning[day][meal], recipeId: newRecipeId, versionIdx: newVersionIdx, liked: false } } })
      return { error: null }
    }
    const { error, newPlanning } = buildCompensatedPlanning(planning, day, meal, newRecipeId, newVersionIdx)
    if (error) return { error }
    patchWeek(newPlanning)
    return { error: null }
  }

  async function changePersonnes(newPersonnes) {
    setPersonnes(newPersonnes)
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      await supabase.from('user_quiz_results').update({ personnes: newPersonnes }).eq('user_id', session.user.id)
    }
  }

  const targetCalPerMeal = macros ? Math.round(macros.calories / meals.length) : null
  const weeklyCalAvg     = computeWeeklyCalAvg(planning, meals)

  async function addMealsAndRegenerate(additions) {
    // additions : { petit_dej: bool, gouter: bool, dessert: bool }
    const updatedQuiz = {
      ...quizData,
      petit_dej: additions.petit_dej ? 'oui' : (quizData?.petit_dej ?? 'oui'),
      gouter:    additions.gouter    ? 'oui' : (quizData?.gouter    ?? 'non'),
      dessert:   additions.dessert   ? 'oui' : (quizData?.dessert   ?? 'non'),
    }
    // Mettre à jour Supabase
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      await supabase
        .from('user_quiz_results')
        .update({
          petit_dej: updatedQuiz.petit_dej,
          gouter:    updatedQuiz.gouter,
          dessert:   updatedQuiz.dessert,
        })
        .eq('user_id', session.user.id)
    }
    // Mettre à jour le state et régénérer les 4 semaines
    setQuizData(updatedQuiz)
    const all = generateAllWeeks(updatedQuiz, macros)
    setAllPlannings(all)
    saveToDB(all)
  }

  return (
    <PlanningContext.Provider value={{
      planning,
      allPlannings,
      activeWeek,
      setActiveWeek,
      initPlanning,
      swapMeal,
      likeMeal,
      setNote,
      validateAll,
      changeVersion,
      changeRecipe,
      changePersonnes,
      regeneratePlanning,
      macros,
      personnes,
      targetCalPerMeal,
      weeklyCalAvg,
      addMealsAndRegenerate,
      quizData,
      DAYS,
      MEALS: meals,
    }}>
      {children}
    </PlanningContext.Provider>
  )
}

export function usePlanning() {
  return useContext(PlanningContext)
}