// src/utils/quizLogic.js

// 46. Logique de calcul des macros
export const calculateMacros = (userData) => {
  const { weight, height, age, gender, activity, goal } = userData;
  
  // Métabolisme de Base (BMR)
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr = gender === 'homme' ? bmr + 5 : bmr - 161;

  // Facteur d'activité (TDEE)
  const activityMap = { sedentaire: 1.2, leger: 1.375, modere: 1.55, intense: 1.725 };
  const tdee = bmr * (activityMap[activity] || 1.2);

  // Ajustement objectif
  const goalMods = { perte: 0.85, tonification: 0.95, maintien: 1, prise: 1.15 };
  const targetKcal = Math.round(tdee * (goalMods[goal] || 1));

  return {
    kcal: targetKcal,
    proteins: Math.round((targetKcal * 0.3) / 4),
    carbs: Math.round((targetKcal * 0.45) / 4),
    lipids: Math.round((targetKcal * 0.25) / 9)
  };
};

// Filtrage des recettes selon le profil
export const filterRecipesForUser = (allRecipes, userData) => {
  return allRecipes.filter(recipe => {
    if (userData.regime && userData.regime !== 'standard') {
      if (!recipe.tags.includes(userData.regime)) return false;
    }
    return true;
  }).slice(0, 8);
};

// Génération aléatoire du planning
export const generateWeeklyPlanning = (selectedRecipes) => {
  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const planning = {};
  days.forEach(day => {
    planning[day] = {
      lunch: selectedRecipes[Math.floor(Math.random() * selectedRecipes.length)],
      dinner: selectedRecipes[Math.floor(Math.random() * selectedRecipes.length)]
    };
  });
  return planning;
};