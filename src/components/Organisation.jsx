'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePlanning } from '../context/PlanningContext'
import { useQuiz } from '../context/QuizContext'
import MealCard from './MealCard'
import ShoppingList from './ShoppingList'

export default function Organisation() {
  const router = useRouter()
  const { completed } = useQuiz()
  const { planning, initPlanning, coursesDay, setCoursesDay, DAYS, MEALS } = usePlanning()
  const [showCoursesModal, setShowCoursesModal] = useState(false)

  useEffect(() => {
    initPlanning()
  }, [])

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '8px' }}>
            Planning
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: 'var(--text)', marginBottom: '4px' }}>
            Ton planning de la semaine
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300' }}>
            Finis de te demander quoi manger. Tu n'as plus qu'à cuisiner.
          </p>
        </div>

        {/* Créneau courses */}
        <div style={{
          background: 'var(--rose-light)', borderRadius: '14px',
          padding: '12px 16px', cursor: 'pointer',
        }}
          onClick={() => setShowCoursesModal(true)}
        >
          <div style={{ fontSize: '10px', fontWeight: '500', color: 'var(--rose)', marginBottom: '2px' }}>
            Créneau courses
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {coursesDay || 'Non défini — cliquer pour définir'}
          </div>
        </div>
      </div>

      {/* Grille planning */}
      {planning && (
        <div style={{ overflowX: 'auto', marginBottom: '8px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `80px repeat(7, 1fr)`,
            gap: '1px', background: 'var(--border)',
            borderRadius: '16px', overflow: 'hidden',
            minWidth: '700px',
          }}>
            {/* Header */}
            <div style={{ background: 'var(--bg)', padding: '10px 6px' }} />
            {DAYS.map(day => (
              <div key={day} style={{
                background: 'var(--bg)', padding: '10px 6px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text)' }}>
                  {day.slice(0, 3)}
                </div>
              </div>
            ))}

            {/* Rows par repas */}
            {MEALS.map(meal => (
              <>
                {/* Label repas */}
                <div key={`label-${meal}`} style={{
                  background: 'var(--bg)', padding: '8px 4px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderTop: '1px solid var(--border)',
                }}>
                  <span style={{
                    fontSize: '8px', fontWeight: '500',
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                    letterSpacing: '0.4px', writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                  }}>
                    {meal === 'Petit-déjeuner' ? 'P-dej' : meal}
                  </span>
                </div>

                {/* Cartes repas */}
                {DAYS.map(day => (
                  <div key={`${day}-${meal}`} style={{
                    background: 'white', padding: '4px',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <MealCard day={day} meal={meal} />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      )}

      {/* Légende actions */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px', fontSize: '10px', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
        <span>✓ Valider</span>
        <span>↺ Changer</span>
        <span>✎ Note</span>
      </div>

      {/* Liste de courses */}
      <ShoppingList />

      {/* Modal créneau courses */}
      {showCoursesModal && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)', zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
          onClick={() => setShowCoursesModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'white', borderRadius: '20px',
              padding: '28px', width: '100%', maxWidth: '360px',
            }}
          >
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: 'var(--text)', marginBottom: '16px' }}>
              Quand fais-tu les courses ?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                <button key={day} onClick={() => { setCoursesDay(day); setShowCoursesModal(false) }} style={{
                  padding: '12px 16px', borderRadius: '12px',
                  border: `1.5px solid ${coursesDay === day ? 'var(--rose)' : 'var(--border)'}`,
                  background: coursesDay === day ? 'var(--rose-light)' : 'white',
                  color: coursesDay === day ? 'var(--rose)' : 'var(--text)',
                  fontSize: '13px', cursor: 'pointer', textAlign: 'left',
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}