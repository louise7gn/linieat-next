'use client'
import { createContext, useContext, useState } from 'react'
import { useQuiz } from './QuizContext'
import { recipes } from '../data/recipes'
import { calcMacros } from '../data/macroCalc'

const PlanningContext = createContext()

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const MEALS = ['Petit-déjeuner', 'Déjeuner', 'Dîner']

function getRandomRecipe(cat, exclude = []) {
  const pool = recipes.filter(r => r.cat === cat && !exclude.includes(r.id))
  if (!pool.length) return recipes.filter(r => r.cat === cat)[0]
  return pool[Math.floor(Math.random() * pool.length)]
}

function generateWeek(quizData) {
  const planning = {}
  const saleRecipes = recipes.filter(r => r.cat === 'sale')
  const sucreRecipes = recipes.filter(r => r.cat === 'sucre')

  DAYS.forEach(day => {
    planning[day] = {}
    MEALS.forEach(meal => {
      const isMatin = meal === 'Petit-déjeuner'
      const pool = isMatin ? sucreRecipes : saleRecipes
      const rec = pool[Math.floor(Math.random() * pool.length)]
      const versionIdx = 1 // version intermédiaire par défaut
      planning[day][meal] = {
        recipeId: rec.id,
        versionIdx,
        liked: false,
        note: '',
      }
    })
  })
  return planning
}

export function PlanningProvider({ children }) {
  const { data } = useQuiz()
  const [planning, setPlanning] = useState(null)
  const [coursesDay, setCoursesDay] = useState(null)

  function initPlanning() {
    if (!planning) {
      setPlanning(generateWeek(data))
    }
  }

  function swapMeal(day, meal) {
    setPlanning(prev => {
      const current = prev[day][meal]
      const isMatin = meal === 'Petit-déjeuner'
      const pool = recipes.filter(r => r.cat === (isMatin ? 'sucre' : 'sale') && r.id !== current.recipeId)
      const newRec = pool[Math.floor(Math.random() * pool.length)]
      return {
        ...prev,
        [day]: {
          ...prev[day],
          [meal]: { ...current, recipeId: newRec.id, liked: false }
        }
      }
    })
  }

  function likeMeal(day, meal) {
    setPlanning(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: { ...prev[day][meal], liked: !prev[day][meal].liked }
      }
    }))
  }

  function setNote(day, meal, note) {
    setPlanning(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: { ...prev[day][meal], note }
      }
    }))
  }

  function setVersion(day, meal, versionIdx) {
    setPlanning(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: { ...prev[day][meal], versionIdx }
      }
    }))
  }

  return (
    <PlanningContext.Provider value={{
      planning, initPlanning, swapMeal,
      likeMeal, setNote, setVersion,
      coursesDay, setCoursesDay,
      DAYS, MEALS,
    }}>
      {children}
    </PlanningContext.Provider>
  )
}

export function usePlanning() {
  return useContext(PlanningContext)
}