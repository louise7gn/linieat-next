import { nutritionDB } from './nutritionDB'

function macros100(name, qty) {
  const db = nutritionDB[name]
  if (!db || !qty) return { kcal: 0, p: 0, g: 0, l: 0 }
  const f = qty / 100
  return { kcal: db.kcal * f, p: db.p * f, g: db.g * f, l: db.l * f }
}

/**
 * Macros fixes d'une version — par personne, sans aucun scaling.
 * Source de vérité pour le planning et les stats.
 */
export function computeVersionMacros(version) {
  const base = version.n || 1
  let kcal = 0, p = 0, g = 0, l = 0

  version.ing.forEach(i => {
    if (!i.qty || (i.unit !== 'g' && i.unit !== 'ml')) return
    const db = nutritionDB[i.name]
    if (!db) return
    const f = (i.qty / base) / 100
    kcal += db.kcal * f
    p    += db.p    * f
    g    += db.g    * f
    l    += db.l    * f
  })

  return {
    calories:  Math.round(kcal),
    proteines: Math.round(p),
    glucides:  Math.round(g),
    lipides:   Math.round(l),
  }
}

/**
 * Multiplie les quantités de la recette par le nombre de personnes.
 * Ne modifie pas les proportions, ne scale pas les macros, ne touche à rien.
 * Uniquement pour l'affichage des ingrédients à cuisiner.
 *
 * @param {Object} version - version de recette (version.ing, version.n)
 * @param {number} personnes - nombre de personnes
 * @returns {{ ing: Object[] }} — ing[].qtyDisplay : quantité formatée pour l'affichage
 */
export function scaleRecipe(version, _unused = null, personnes = 1) {
  const base = version.n || 1

  const ing = version.ing.map(i => {
    if (!i.qty) {
      return { name: i.name, unit: i.unit, role: i.role, qtyDisplay: '' }
    }

    if (i.unit === 'g' || i.unit === 'ml') {
      const qtyTotal = Math.round((i.qty / base) * personnes)
      return {
        name:       i.name,
        unit:       i.unit,
        role:       i.role,
        qtyDisplay: fmtQty(qtyTotal, i.unit),
      }
    }

    // Unités non métriques (cs, cc, pièces…)
    const qtyTotal = Math.max(Math.round((i.qty / base) * personnes), 1)
    return {
      name:       i.name,
      unit:       i.unit,
      role:       i.role,
      qtyDisplay: fmtQty(qtyTotal, i.unit),
    }
  })

  return { ing }
}

function fmtQty(qty, unit) {
  if (qty == null) return ''
  if (unit === 'g')  return `${qty}g`
  if (unit === 'ml') return `${qty}ml`
  if (unit === 'cs') return qty <= 1 ? '1 cs' : `${qty} cs`
  if (unit === 'cc') return qty <= 1 ? '1 cc' : `${qty} cc`
  return `${qty}`
}