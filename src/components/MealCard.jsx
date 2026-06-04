'use client'
import { useState } from 'react'
import { recipes } from '../data/recipes'
import { usePlanning } from '../context/PlanningContext'

export default function MealCard({ day, meal }) {
  const { planning, likeMeal, swapMeal, setNote, setVersion } = usePlanning()
  const [showNote, setShowNote] = useState(false)
  const [noteInput, setNoteInput] = useState('')

  if (!planning?.[day]?.[meal]) return null

  const slot = planning[day][meal]
  const recipe = recipes.find(r => r.id === slot.recipeId)
  if (!recipe) return null

  const version = recipe.versions[slot.versionIdx] || recipe.versions[1]

  function handleSaveNote() {
    setNote(day, meal, noteInput)
    setShowNote(false)
  }

  return (
    <div style={{
      background: slot.liked ? '#F6FBF7' : 'white',
      border: `1px solid ${slot.liked ? '#7A9E8A' : 'var(--border)'}`,
      borderRadius: '10px', padding: '8px',
      position: 'relative',
    }}>
      {/* Image */}
      <div style={{
        height: '48px', borderRadius: '6px',
        background: 'var(--rose-light)', overflow: 'hidden',
        marginBottom: '6px',
      }}>
        <img
          src={recipe.img} alt={recipe.titre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => e.target.style.display = 'none'}
        />
      </div>

      {/* Nom */}
      <div style={{
        fontSize: '9px', fontWeight: '500',
        color: slot.liked ? '#2D6B47' : 'var(--text)',
        lineHeight: '1.3', marginBottom: '3px',
      }}>
        {recipe.titre}
      </div>

      {/* Kcal */}
      <div style={{ fontSize: '8px', color: 'var(--text-muted)', marginBottom: '5px' }}>
        {version.k} kcal · {version.l}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '3px' }}>
        <button
          onClick={() => likeMeal(day, meal)}
          title={slot.liked ? 'Retirer' : 'Valider'}
          style={{
            width: '20px', height: '20px', borderRadius: '5px',
            border: 'none', cursor: 'pointer', fontSize: '10px',
            background: slot.liked ? '#EEF5F1' : 'var(--bg)',
            color: slot.liked ? '#2D6B47' : 'var(--text-muted)',
          }}
        >
          ✓
        </button>
        <button
          onClick={() => swapMeal(day, meal)}
          title="Changer"
          style={{
            width: '20px', height: '20px', borderRadius: '5px',
            border: 'none', cursor: 'pointer', fontSize: '10px',
            background: 'var(--bg)', color: 'var(--text-muted)',
          }}
        >
          ↺
        </button>
        <button
          onClick={() => { setNoteInput(slot.note); setShowNote(true) }}
          title="Note"
          style={{
            width: '20px', height: '20px', borderRadius: '5px',
            border: 'none', cursor: 'pointer', fontSize: '10px',
            background: slot.note ? 'var(--rose-light)' : 'var(--bg)',
            color: slot.note ? 'var(--rose)' : 'var(--text-muted)',
          }}
        >
          ✎
        </button>
      </div>

      {/* Modal note */}
      {showNote && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)', zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
          onClick={() => setShowNote(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'white', borderRadius: '16px',
              padding: '24px', width: '100%', maxWidth: '360px',
            }}
          >
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '18px', color: 'var(--text)', marginBottom: '12px' }}>
              Note pour {recipe.titre}
            </h3>
            <textarea
              value={noteInput}
              onChange={e => setNoteInput(e.target.value)}
              placeholder="Ex: Décongeler le saumon le matin..."
              style={{
                width: '100%', minHeight: '80px',
                border: '1px solid var(--border)', borderRadius: '10px',
                padding: '10px 12px', fontSize: '13px',
                fontFamily: "'DM Sans', sans-serif",
                outline: 'none', resize: 'vertical',
              }}
            />
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button onClick={handleSaveNote} style={{
                flex: 1, padding: '10px', background: 'var(--rose)',
                color: 'white', border: 'none', borderRadius: '10px',
                fontSize: '13px', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Enregistrer
              </button>
              <button onClick={() => setShowNote(false)} style={{
                flex: 1, padding: '10px', background: 'var(--bg)',
                color: 'var(--text)', border: '1px solid var(--border)',
                borderRadius: '10px', fontSize: '13px', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}