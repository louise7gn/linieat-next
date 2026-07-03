'use client'
import { useRouter } from 'next/navigation'
import { useQuiz } from '../context/QuizContext'
import { quizSteps } from '../data/quizSteps'
import QuizProgress from './QuizProgress'
import QuizStep from './QuizStep'
import { supabase } from '@/utils/supabaseClient'
import { useState } from 'react'

export default function Quiz() {
  const router = useRouter()
  const { data, answer, finish } = useQuiz()
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleSteps = quizSteps.filter(s => {
    if (!s.condition) return true
    return s.condition(data)
  })

  const currentStep = visibleSteps[currentIndex]
  const total = visibleSteps.length
  const current = currentIndex + 1
  const currentValue = currentStep ? data[currentStep.key] : null
  const canNext = currentValue !== undefined && currentValue !== null &&
    !(Array.isArray(currentValue) && currentValue.length === 0) &&
    currentValue !== ''

  async function handleNext() {
    if (currentIndex < visibleSteps.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      finish()
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        const { error } = await supabase
          .from('user_quiz_results')
          .upsert({
            user_id:         session.user.id,
            weight:          data.poids,
            height:          data.taille,
            age:             data.age,
            gender:          data.genre,
            activity:        data.sport,
            cardio_pct:      data['cardio-pct'],
            pas:             data.pas,
            goal:            data.objectif,
            petit_dej:       data['petit-dej'],
            petit_dej_type:  data['petit-dej-type'],
            gouter:          data['gouter'],
            gouter_type:     data['gouter-type'],
            dessert:         data['dessert'],
            regime:          data.regime,
            aliments_evites: data['aliments-evites'] || [],
            aliments_aimes:  data['aliments-aimes']  || [],
            budget:          data.budget,
            temps_cuisine:   data['temps-cuisine'],
            batch_cooking:   data['batch-cooking'],
            batch_repas:     data['batch-repas'] || [],
            personnes:       data.personnes || 1,
            macros:          null,
          }, { onConflict: 'user_id' })
        console.log('upsert error:', error)

        // Les réponses ont changé : on supprime l'ancien planning
        // pour forcer une régénération avec les nouvelles données
        const { error: deleteError } = await supabase
          .from('user_planning')
          .delete()
          .eq('user_id', session.user.id)
        if (deleteError) console.log('delete planning error:', deleteError)
      }
      window.location.href = '/resultats'
    }
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  if (!currentStep) return null

  return (
    <div style={{ paddingTop: '32px', paddingBottom: '60px', maxWidth: '600px', margin: '0 auto' }}>
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

      <QuizProgress current={current} total={total} />

      <div style={{ marginBottom: '32px' }}>
        <QuizStep
          step={currentStep}
          value={currentValue}
          onChange={val => answer(currentStep.key, val)}
        />
      </div>

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