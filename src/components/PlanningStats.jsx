'use client'
import { useState } from 'react'
import { recipes } from '../data/recipes'
import { scaleRecipe, computeVersionMacros } from '../data/scaleRecipe'
import { usePlanning } from '../context/PlanningContext'

function getWeeklyTotals(planning, DAYS, MEALS, personnes) {
  let cal = 0, p = 0, g = 0, l = 0
  DAYS.forEach(day => {
    MEALS.forEach(meal => {
      const slot = planning[day]?.[meal]
      if (!slot) return
      const recipe = recipes.find(r => r.id === slot.recipeId)
      if (!recipe) return
      const version = recipe.versions[slot.versionIdx] || recipe.versions[1]
      const macros = computeVersionMacros(version)
      cal += macros.calories
      p   += macros.proteines
      g   += macros.glucides
      l   += macros.lipides
    })
  })
  return { cal, p, g, l }
}

function pct(actual, target) {
  if (!target) return 0
  return Math.round(((actual - target) / target) * 100)
}

// Seuils scientifiques différenciés par macro
// Calories : ±10% (Frankenfield et al. 2005 — seuil de validation Mifflin-St Jeor)
// Protéines : ±15% (Phillips & Van Loon 2011 — fourchette sportive)
// Glucides & Lipides : ±20% (DRI fourchettes larges)
function getThreshold(label) {
  if (label === 'Calories')  return 10
  if (label === 'Protéines') return 15
  return 20
}

function statusLabel(label, diff) {
  const t = getThreshold(label)
  if (Math.abs(diff) <= t)           return { text: 'Optimal',           color: '#2D6B47', bg: '#EEF5F1' }
  if (diff > t  && diff <= t * 1.5)  return { text: `+${diff}% au-dessus`, color: '#7A6000', bg: '#FFF8E1' }
  if (diff > t  * 1.5)               return { text: `+${diff}% excès`,     color: '#c00000', bg: '#FFEBEE' }
  if (diff < -t && diff >= -t * 1.5) return { text: `${diff}% en dessous`, color: '#7A6000', bg: '#FFF8E1' }
  return                               { text: `${diff}% déficit`,          color: '#c00000', bg: '#FFEBEE' }
}

function isProblematic(label, diff) {
  return Math.abs(diff) > getThreshold(label)
}

function globalComment(diffs, objective) {
  const issues = []
  if (isProblematic('Calories',  diffs.cal)) issues.push(diffs.cal > 0 ? 'excès calorique'         : 'déficit calorique')
  if (isProblematic('Protéines', diffs.p))   issues.push(diffs.p   > 0 ? 'protéines trop élevées'  : 'protéines insuffisantes')
  if (isProblematic('Glucides',  diffs.g))   issues.push(diffs.g   > 0 ? 'excès de glucides'        : 'glucides insuffisants')
  if (isProblematic('Lipides',   diffs.l))   issues.push(diffs.l   > 0 ? 'excès de lipides'         : 'lipides insuffisants')

  if (issues.length === 0) return 'Ce planning est bien adapté à tes objectifs.'

  const objectiveLabel = {
    perte:    'perte de poids',
    muscu:    'prise de muscle',
    fit:      'objectif fitness',
    maintien: 'maintien',
    sante:    'équilibre alimentaire',
    cardio:   'performance',
  }[objective] || 'tes objectifs'

  return `Attention : ${issues.join(', ')} détecté${issues.length > 1 ? 's' : ''} — ce planning s'écarte de ton objectif de ${objectiveLabel}.`
}

export default function PlanningStats() {
  const { planning, macros, personnes, quizData, DAYS, MEALS } = usePlanning()
  const [showModal, setShowModal] = useState(false)

  if (!planning || !macros) return null

  const totals = getWeeklyTotals(planning, DAYS, MEALS, personnes)
  const targets = {
    cal: macros.calories  * 7,
    p:   macros.proteines * 7,
    g:   macros.glucides  * 7,
    l:   macros.lipides   * 7,
  }

  const diffs = {
    cal: pct(totals.cal, targets.cal),
    p:   pct(totals.p,   targets.p),
    g:   pct(totals.g,   targets.g),
    l:   pct(totals.l,   targets.l),
  }

  const hasIssue =
    isProblematic('Calories',  diffs.cal) ||
    isProblematic('Protéines', diffs.p)   ||
    isProblematic('Glucides',  diffs.g)   ||
    isProblematic('Lipides',   diffs.l)

  const pillColor = hasIssue ? '#7A6000' : '#2D6B47'
  const pillBg    = hasIssue ? '#FFF8E1' : '#EEF5F1'
  const pillText  = hasIssue ? 'Planning à ajuster' : 'Planning adapté'

  const rows = [
    { label: 'Calories',  actual: Math.round(totals.cal), target: Math.round(targets.cal), unit: 'kcal', diff: diffs.cal },
    { label: 'Protéines', actual: Math.round(totals.p),   target: Math.round(targets.p),   unit: 'g',    diff: diffs.p },
    { label: 'Glucides',  actual: Math.round(totals.g),   target: Math.round(targets.g),   unit: 'g',    diff: diffs.g },
    { label: 'Lipides',   actual: Math.round(totals.l),   target: Math.round(targets.l),   unit: 'g',    diff: diffs.l },
  ]

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '13px', fontWeight: '500',
          color: pillColor, background: pillBg,
          borderRadius: '20px', padding: '8px 16px',
          border: `1px solid ${pillColor}33`,
        }}>
          {pillText}
        </span>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '12px', color: 'var(--rose)',
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: 'underline', padding: 0,
          }}
        >
          Voir le détail →
        </button>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 300, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'white', borderRadius: '20px', padding: '28px',
              width: '100%', maxWidth: '420px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: 'var(--text)', margin: 0 }}>
                Analyse de la semaine
              </h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'var(--text-muted)', lineHeight: 1 }}>×</button>
            </div>

             <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
              {globalComment(diffs, quizData?.goal)}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {rows.map(row => {
                const status   = statusLabel(row.label, row.diff)
                const problematic = isProblematic(row.label, row.diff)
                const barPct   = Math.min((row.actual / row.target) * 100, 130)
                return (
                  <div key={row.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text)' }}>{row.label}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          {row.actual} / {row.target} {row.unit}
                        </span>
                        <span style={{
                          fontSize: '10px', fontWeight: '500',
                          color: status.color, background: status.bg,
                          borderRadius: '8px', padding: '2px 8px',
                        }}>
                          {status.text}
                        </span>
                      </div>
                    </div>
                    <div style={{ height: '6px', background: 'var(--bg)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: '4px',
                        width: `${barPct}%`,
                        background: problematic
                          ? (row.diff > 0 ? '#FF9800' : '#F44336')
                          : 'var(--rose)',
                        transition: 'width 0.3s',
                      }} />
                    </div>
                  </div>
                )
              })}
            </div>

            <p style={{ fontSize: '10px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
              Valeurs calculées sur les {DAYS.length * MEALS.length} repas de la semaine (CIQUAL 2020).<br />
              Seuils : Calories ±10% · Protéines ±15% · Glucides & Lipides ±20%
            </p>
          </div>
        </div>
      )}
    </>
  )
}