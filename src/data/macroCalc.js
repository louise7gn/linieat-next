// ─── CALCUL DES MACROS ───────────────────────────────────────────────────────
//
// Sources :
//   BMR      : Mifflin-St Jeor, J Am Diet Assoc 1990
//   PAL      : DRI / IOM 2005 · Santé Canada 2010
//   PAL pas  : Tudor-Locke & Bassett, Sports Med 2004
//   Déficit  : Hall et al., Lancet 2011 · Diététistes du Canada 2020
//   Protéines (muscu)  : Phillips & Van Loon, J Sports Sci 2011
//   Protéines (perte)  : Helms et al., IJSNEM 2014
//   Protéines (cardio) : Burke et al., J Sports Sci 2011
//   Lipides / Glucides : DRI / IOM 2005

export function calcMacros(data) {

  // ── Sanitisation ──────────────────────────────────────────────────────────
  const genre    = ['femme', 'homme', 'autre'].includes(data.genre) ? data.genre : 'autre'
  const poids    = Math.max(25,  Math.min(200, Number(data.poids)  || 70))
  const taille   = Math.max(100, Math.min(220, Number(data.taille) || 170))
  const age      = Math.max(15,  Math.min(80,  Number(data.age)    || 25))
  const sport    = data.sport    || 'sedentaire'
  const objectif = data.objectif || 'maintien'

  // ── BMR — Mifflin-St Jeor (1990) ─────────────────────────────────────────
  let bmr
  if (genre === 'femme') {
    bmr = 10 * poids + 6.25 * taille - 5 * age - 161
  } else if (genre === 'homme') {
    bmr = 10 * poids + 6.25 * taille - 5 * age + 5
  } else {
    const bmrF = 10 * poids + 6.25 * taille - 5 * age - 161
    const bmrH = 10 * poids + 6.25 * taille - 5 * age + 5
    bmr = (bmrF + bmrH) / 2
  }

  // ── PAL sport — DRI / IOM 2005 · Santé Canada 2010 ──────────────────────
  const sportPALMap = {
    'sedentaire': 1.2,
    'leger':      1.375,
    'modere':     1.55,
    'actif':      1.725,
    'tres-actif': 1.9,
  }
  const sportPAL = sportPALMap[sport] || 1.375

  // ── PAL pas — Tudor-Locke & Bassett, Sports Med 2004 ─────────────────────
  const stepsPALMap = {
    'tres-bas':   1.2,
    'bas':        1.375,
    'moyen':      1.55,
    'actif':      1.725,
    'tres-actif': 1.9,
  }
  const stepsPAL = stepsPALMap[data.pas] || null

  // PAL final : sport structuré 60% + activité quotidienne 40%
  const finalPAL = stepsPAL
    ? sportPAL * 0.6 + stepsPAL * 0.4
    : sportPAL

  const tdee = bmr * finalPAL

  // ── Ajustement calorique par objectif ────────────────────────────────────
  //
  // perte    : -300 kcal — déficit modéré (~300g perte/semaine) (Hall et al. 2011)
  // sante    :   0 kcal  — "Fit & tonique" : rééquilibrage sans déficit
  // maintien :   0 kcal  — maintenance standard
  // cardio   : +150 kcal — léger surplus pour les réserves de glycogène (Burke 2011)
  // muscu    : +300 kcal — surplus pour la synthèse protéique (Phillips 2011)
  //
  const objectifCalMap = {
    'perte':    -300,
    'sante':       0,
    'maintien':    0,
    'cardio':   +150,
    'muscu':    +300,
  }
  let calories = Math.round(tdee + (objectifCalMap[objectif] ?? 0))
  const minCal = genre === 'femme' ? 1300 : 1500
  calories = Math.max(calories, minCal)

  // ── Protéines ─────────────────────────────────────────────────────────────
  //
  // muscu    : 1.6–2.0 g/kg — maximiser la synthèse protéique (Phillips & Van Loon 2011)
  // perte    : 1.2–1.6 g/kg — préservation masse maigre en déficit (Helms et al. 2014)
  // cardio   : 1.4 g/kg fixe — réparation musculaire, glucides prioritaires (Burke 2011)
  // sante    : 1.2–1.4 g/kg — apport suffisant pour le tonus musculaire
  // maintien : 0.8–1.4 g/kg — besoins de base selon activité
  //
  let protFactor
  if (objectif === 'muscu') {
    protFactor = sport === 'sedentaire' ? 1.6 : 2.0
  } else if (objectif === 'cardio') {
    protFactor = 1.4
  } else if (objectif === 'perte') {
    protFactor = sport === 'sedentaire' ? 1.2 : 1.6
  } else if (objectif === 'sante') {
    protFactor = sport === 'sedentaire' ? 1.2 : 1.4
  } else {
    // maintien
    protFactor = sport === 'sedentaire' ? 0.8 : 1.4
  }
  const proteines = Math.round(poids * protFactor)

  // ── Lipides — DRI / IOM 2005 (20–35% des calories) ───────────────────────
  //
  // cardio   : 20% — glucides prioritaires pour le glycogène musculaire
  // perte    : 25% — satiété et maintien hormonal en déficit
  // sante    : 28% — légèrement réduit, profil équilibré
  // maintien : 30% — standard
  // muscu    : 30% — aucune raison de réduire
  //
  const lipidePctMap = {
    'cardio':   0.20,
    'perte':    0.25,
    'sante':    0.28,
    'maintien': 0.30,
    'muscu':    0.30,
  }
  const lipidePct = lipidePctMap[objectif] ?? 0.30
  const lipides = Math.round((calories * lipidePct) / 9)

  // ── Glucides — DRI / IOM 2005 (par différence, plancher 50 g/j) ──────────
  //
  // cardio obtient automatiquement ~55–65% des calories en glucides
  // grâce aux lipides bas (20%) et protéines modérées (1.4 g/kg)
  //
  const glucidesBruts = Math.round((calories - proteines * 4 - lipides * 9) / 4)
  const glucides = Math.max(glucidesBruts, 50)

  return {
    calories,
    proteines,
    glucides,
    lipides,
    bmr:      Math.round(bmr),
    tdee:     Math.round(tdee),
    palFinal: Math.round(finalPAL * 100) / 100,
  }
}

// ── Version de recette par objectif ──────────────────────────────────────────
//
// perte    → Light (0)    — déficit calorique
// sante    → Classique (1) — équilibré, légèrement réduit
// maintien → Classique (1) — standard
// cardio   → Classique (1) — glucides hauts, pas de surplus massif
// muscu    → Volume (2)   — surplus + protéines maximales
//
export function getVersionIdx(objectif) {
  if (objectif === 'perte')  return 0
  if (objectif === 'muscu')  return 2
  return 1
}