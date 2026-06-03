'use client'
import { useRouter } from 'next/navigation'
import { useQuiz } from '../context/QuizContext'
import { quizSteps } from '../data/quizSteps'
import QuizProgress from './QuizProgress'
import QuizStep from './QuizStep'

export default function Quiz() {
  const router = useRouter()
  const { data, step, answer, next, prev, finish } = useQuiz()

  // Filtrer les étapes visibles selon conditions
  const visibleSteps = quizSteps.filter(s => {
    if (!s.condition) return true
    return s.condition(data)
  })

  const currentIndex = visibleSteps.findIndex(s => s.id === step) === -1
    ? 0
    : visibleSteps.findIndex(s => s.id === step)

  const currentStep = visibleSteps[currentIndex]
  const total = visibleSteps.length
  const current = currentIndex + 1
  const currentValue = currentStep ? data[currentStep.key] : null
  const canNext = currentValue !== undefined && currentValue !== null &&
    !(Array.isArray(currentValue) && currentValue.length === 0) &&
    currentValue !== ''

  function handleNext() {
    if (currentIndex < visibleSteps.length - 1) {
      const nextStep = visibleSteps[currentIndex + 1]
      answer('__step', nextStep.id)
      next()
    } else {
      finish()
      router.push('/resultats')
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      const prevStep = visibleSteps[currentIndex - 1]
      answer('__step', prevStep.id)
      prev()
    }
  }

  if (!currentStep) return null

  return (
    <div style={{ paddingTop: '32px', paddingBottom: '60px', maxWidth: '600px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: '8px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'var(--rose-dark)', color: 'white',
          fontSize: '20px', marginBottom: '20px',
        }}>
          ✦
        </div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '28px', color: 'var(--text)',
          lineHeight: '1.2', marginBottom: '8px',
        }}>
          {currentStep.question}
        </h2>
        {currentStep.sub && (
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300', marginBottom: '24px' }}>
            {currentStep.sub}
          </p>
        )}
      </div>

      {/* Progress */}
      <QuizProgress current={current} total={total} />

      {/* Step content */}
      <div style={{ marginBottom: '32px' }}>
        <QuizStep
          step={currentStep}
          value={currentValue}
          onChange={val => answer(currentStep.key, val)}
        />
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
        {currentIndex > 0 ? (
          <button onClick={handlePrev} style={{
            padding: '13px 24px', borderRadius: '30px',
            border: '1px solid var(--border)', background: 'white',
            color: 'var(--text)', fontSize: '13px', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            ← Retour
          </button>
        ) : <div />}

        <button
          onClick={handleNext}
          disabled={!canNext}
          style={{
            padding: '13px 32px', borderRadius: '30px',
            border: 'none',
            background: canNext ? 'var(--rose)' : 'var(--border)',
            color: canNext ? 'white' : 'var(--text-muted)',
            fontSize: '13px', fontWeight: '500', cursor: canNext ? 'pointer' : 'not-allowed',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.15s',
          }}
        >
          {currentIndex === visibleSteps.length - 1 ? 'Voir mes résultats →' : 'Suivant →'}
        </button>
      </div>
    </div>
  )
}