'use client'
import { createContext, useContext, useState } from 'react'

const QuizContext = createContext()

export function QuizProvider({ children }) {
  const [data, setData] = useState({})
  const [step, setStep] = useState(1)
  const [completed, setCompleted] = useState(false)

  function answer(key, value) {
    setData(prev => ({ ...prev, [key]: value }))
  }

  function next() {
    setStep(prev => prev + 1)
  }

  function prev() {
    setStep(prev => Math.max(1, prev - 1))
  }

  function finish() {
    setCompleted(true)
  }

  function reset() {
    setData({})
    setStep(1)
    setCompleted(false)
  }

  return (
    <QuizContext.Provider value={{ data, step, completed, answer, next, prev, finish, reset }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  return useContext(QuizContext)
}