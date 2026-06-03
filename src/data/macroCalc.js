export function calcMacros(data) {
  const { genre, age, poids, taille, sport, objectif } = data

  // Mifflin-St Jeor
  let bmr
  if (genre === 'femme') {
    bmr = 10 * poids + 6.25 * taille - 5 * age - 161
  } else {
    bmr = 10 * poids + 6.25 * taille - 5 * age + 5
  }

  // Coefficient d'activité
  const activityMap = {
    'sedentaire': 1.2,
    'leger': 1.375,
    'modere': 1.55,
    'actif': 1.725,
    'tres-actif': 1.9,
  }
  const tdee = bmr * (activityMap[sport] || 1.375)

  // Ajustement selon objectif
  const objectifMap = {
    'perte': -400,
    'muscu': +300,
    'fit': -150,
    'maintien': 0,
    'sante': 0,
    'cardio': +200,
  }
  const calories = Math.round(tdee + (objectifMap[objectif] || 0))

  // Protéines selon type de sport
  const sportTypeMap = {
    'muscu': 2.2,
    'mix': 1.8,
    'cardio': 1.5,
    'autre': 1.6,
  }
  const protFactor = sportTypeMap[data['cardio-pct']] || 1.6
  const proteines = Math.round(poids * protFactor)

  // Lipides = 25% des calories
  const lipides = Math.round((calories * 0.25) / 9)

  // Glucides = le reste
  const glucides = Math.round((calories - proteines * 4 - lipides * 9) / 4)

  return {
    calories,
    proteines,
    glucides,
    lipides,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
  }
}