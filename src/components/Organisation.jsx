'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePlanning } from '../context/PlanningContext'
import MealCard from './MealCard'
import ShoppingList from './ShoppingList'
import PlanningStats from './PlanningStats'

const WEEK_LABELS = ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4']

export default function Organisation() {
  const router = useRouter()
  const {
    planning, initPlanning, regeneratePlanning, validateAll,
    activeWeek, setActiveWeek,
    macros, quizData, weeklyCalAvg,
    addMealsAndRegenerate,
    DAYS, MEALS,
  } = usePlanning()

  const [showRegenConfirm, setShowRegenConfirm] = useState(false)
  const [week4Dismissed, setWeek4Dismissed] = useState(false)
  const [selectedAdditions, setSelectedAdditions] = useState({ petit_dej: false, gouter: false, dessert: false })
  const [showAddMealsConfirm, setShowAddMealsConfirm] = useState(false)

  useEffect(() => { setWeek4Dismissed(false) }, [activeWeek])

  useEffect(() => {
    initPlanning()
  }, [])

  function handleRegen() {
    regeneratePlanning()
    setShowRegenConfirm(false)
  }

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>

      {/* Retour */}
      <button
        onClick={() => router.push('/')}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '12px', color: 'var(--text-muted)',
          fontFamily: "'DM Sans', sans-serif", padding: 0, marginBottom: '16px',
        }}
      >
        ← Retour à l'accueil
      </button>

      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '8px' }}>
          Planning
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '4px' }}>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: 'var(--text)', margin: 0 }}>
            Ton planning du mois
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <PlanningStats />
            <button
              onClick={validateAll}
              style={{
                background: 'var(--rose)', border: 'none', borderRadius: '20px',
                padding: '8px 16px', fontSize: '12px', color: 'white',
                fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ✓ Tout valider
            </button>
            <button
              onClick={() => setShowRegenConfirm(true)}
              style={{
                background: 'none', border: '0.5px solid var(--border)', borderRadius: '20px',
                padding: '8px 16px', fontSize: '12px', color: 'var(--text-muted)',
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ↺ Refaire cette semaine
            </button>
          </div>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300', marginTop: '4px' }}>
          Finis de te demander quoi manger. Tu n'as plus qu'à cuisiner.
        </p>
      </div>

      {/* Banner suggestion repas manquants
          Visible dès que : déficit > 5% de la cible ET il reste des repas à activer.
          Disparaît automatiquement quand le déficit est comblé ou qu'il n'y a plus d'options.
      */}
      {(() => {
        if (!macros || !weeklyCalAvg || !quizData) return null
        const deficit = macros.calories - weeklyCalAvg
        if (deficit < macros.calories * 0.1) return null  // < 5% → pas de problème
        const canAddPetitDej = quizData.petit_dej === 'non'
        const canAddGouter   = quizData.gouter    === 'non'
        const canAddDessert  = quizData.dessert   === 'non'
        if (!canAddPetitDej && !canAddGouter && !canAddDessert) return null
        return (
          <div style={{
            marginBottom: '20px',
            background: '#FFF8E6',
            border: '1px solid #F0C040',
            borderRadius: '16px',
            padding: '16px 20px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text)', marginBottom: '4px' }}>
              Ton planning est à {weeklyCalAvg} kcal/jour — il manque {deficit} kcal vs ta cible de {macros.calories} kcal.
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Ajoute des repas pour combler le déficit :
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {canAddPetitDej && (
                <button
                  onClick={() => setSelectedAdditions(s => ({ ...s, petit_dej: !s.petit_dej }))}
                  style={{
                    padding: '8px 14px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    border: `1.5px solid ${selectedAdditions.petit_dej ? '#F0C040' : 'var(--border)'}`,
                    background: selectedAdditions.petit_dej ? '#FFF8E6' : 'white',
                    color: selectedAdditions.petit_dej ? '#8B6914' : 'var(--text)',
                    fontWeight: selectedAdditions.petit_dej ? '500' : '400',
                  }}
                >
                  {selectedAdditions.petit_dej ? '✓ ' : ''}Petit-déjeuner
                </button>
              )}
              {canAddGouter && (
                <button
                  onClick={() => setSelectedAdditions(s => ({ ...s, gouter: !s.gouter }))}
                  style={{
                    padding: '8px 14px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    border: `1.5px solid ${selectedAdditions.gouter ? '#F0C040' : 'var(--border)'}`,
                    background: selectedAdditions.gouter ? '#FFF8E6' : 'white',
                    color: selectedAdditions.gouter ? '#8B6914' : 'var(--text)',
                    fontWeight: selectedAdditions.gouter ? '500' : '400',
                  }}
                >
                  {selectedAdditions.gouter ? '✓ ' : ''}Goûter
                </button>
              )}
              {canAddDessert && (
                <button
                  onClick={() => setSelectedAdditions(s => ({ ...s, dessert: !s.dessert }))}
                  style={{
                    padding: '8px 14px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    border: `1.5px solid ${selectedAdditions.dessert ? '#F0C040' : 'var(--border)'}`,
                    background: selectedAdditions.dessert ? '#FFF8E6' : 'white',
                    color: selectedAdditions.dessert ? '#8B6914' : 'var(--text)',
                    fontWeight: selectedAdditions.dessert ? '500' : '400',
                  }}
                >
                  {selectedAdditions.dessert ? '✓ ' : ''}Desserts
                </button>
              )}
            </div>
            {Object.values(selectedAdditions).some(Boolean) && (
              <button
                onClick={() => setShowAddMealsConfirm(true)}
                style={{
                  padding: '9px 18px', borderRadius: '12px', border: 'none',
                  background: '#F0C040', color: '#4A3500',
                  fontSize: '12px', fontWeight: '500', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Ajouter les repas sélectionnés →
              </button>
            )}
          </div>
        )
      })()}

            {/* Message fin de mois — semaine 4 uniquement */}
      {activeWeek === 4 && !week4Dismissed && (
        <div style={{
          marginBottom: '20px',
          background: 'var(--rose-light)',
          border: '1px solid var(--rose)',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ fontSize: '13px', color: 'var(--text)', lineHeight: '1.5' }}>
            Après 4 semaines, on te recommande de refaire le quiz pour prendre en compte ton évolution — poids, activité, objectifs. Ton planning s'adapte automatiquement.
          </div>
          <button
            onClick={() => setWeek4Dismissed(true)}
            style={{
              background: 'var(--rose)', border: 'none', borderRadius: '12px',
              padding: '8px 16px', fontSize: '12px', color: 'white',
              fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              whiteSpace: 'nowrap',
            }}
          >
            C'est compris
          </button>
        </div>
      )}

      {/* Onglets semaines */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {WEEK_LABELS.map((label, i) => {
          const w = i + 1
          const active = activeWeek === w
          return (
            <button
              key={w}
              onClick={() => setActiveWeek(w)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: `1.5px solid ${active ? 'var(--rose)' : 'var(--border)'}`,
                background: active ? 'var(--rose)' : 'white',
                color: active ? 'white' : 'var(--text)',
                fontSize: '13px',
                fontWeight: active ? '500' : '400',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.15s',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Grille planning */}
      {planning && (
        <div style={{
          background: 'white', border: '0.5px solid var(--border)',
          borderRadius: '20px', padding: '20px', marginBottom: '16px',
        }}>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `80px repeat(7, 1fr)`,
              gap: '1px', background: 'var(--border)',
              borderRadius: '16px', overflow: 'hidden',
              minWidth: '900px',
            }}>
              <div style={{ background: 'var(--bg)', padding: '10px 6px' }} />
              {DAYS.map(day => (
                <div key={day} style={{ background: 'var(--bg)', padding: '10px 6px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text)' }}>
                    {day.slice(0, 3)}
                  </div>
                </div>
              ))}

              {MEALS.map(meal => (
                <React.Fragment key={meal}>
                  <div style={{
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
                  {DAYS.map(day => (
                    <div key={`${day}-${meal}`} style={{
                      background: 'white', padding: '4px',
                      borderTop: '1px solid var(--border)',
                    }}>
                      <MealCard day={day} meal={meal} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Légende */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px', fontSize: '10px', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
        <span>✓ Valider (ajoute à la liste de courses)</span>
        <span>↺ Changer</span>
        <span>✎ Note</span>
      </div>

      {/* Liste de courses */}
      <ShoppingList />

      {/* Modal confirmation ajout de repas */}
      {showAddMealsConfirm && (
        <div
          onClick={() => setShowAddMealsConfirm(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 300, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: 'white', borderRadius: '20px', padding: '28px', width: '100%', maxWidth: '380px' }}
          >
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>
              Attention
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
              Tous tes repas des 4 semaines — <strong>y compris ceux validés en vert</strong> — seront remplacés par un nouveau planning adapté à tes nouveaux repas.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={async () => {
                  await addMealsAndRegenerate(selectedAdditions)
                  setShowAddMealsConfirm(false)
                  setSelectedAdditions({ petit_dej: false, gouter: false, dessert: false })
                }}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px', border: 'none',
                  background: 'var(--rose)', color: 'white', fontSize: '13px',
                  fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Oui, ajouter
              </button>
              <button
                onClick={() => setShowAddMealsConfirm(false)}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px',
                  border: '1px solid var(--border)', background: 'white',
                  color: 'var(--text)', fontSize: '13px',
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal confirmation régénération semaine */}
      {showRegenConfirm && (
        <div
          onClick={() => setShowRegenConfirm(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 300, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: 'white', borderRadius: '20px', padding: '28px', width: '100%', maxWidth: '380px' }}
          >
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: 'var(--text)', marginBottom: '12px' }}>
              Refaire la semaine {activeWeek} ?
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
              Un nouveau planning sera généré pour cette semaine uniquement. Les autres semaines et tes recettes validées ne sont pas affectées.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleRegen}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px', border: 'none',
                  background: 'var(--rose)', color: 'white', fontSize: '13px',
                  fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Oui, refaire
              </button>
              <button
                onClick={() => setShowRegenConfirm(false)}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px',
                  border: '1px solid var(--border)', background: 'white',
                  color: 'var(--text)', fontSize: '13px',
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}