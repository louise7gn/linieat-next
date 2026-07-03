'use client'
import { useState } from 'react'
import { recipes } from '../data/recipes'
import { usePlanning } from '../context/PlanningContext'
import { getVersionIdx } from '../data/macroCalc'
import { computeVersionMacros } from '../data/scaleRecipe'
import RecipeDetail from './RecipeDetail'

export default function MealCard({ day, meal }) {
  const {
    planning, likeMeal, swapMeal, setNote,
    changeVersion, changeRecipe, changePersonnes,
    macros, personnes, targetCalPerMeal, quizData,
  } = usePlanning()

  const [showNote, setShowNote] = useState(false)
  const [showRecipe, setShowRecipe] = useState(false)
  const [noteInput, setNoteInput] = useState('')
  const [gearStep, setGearStep] = useState(null)
  const [pendingVersionIdx, setPendingVersionIdx] = useState(null)
  const [pendingRecipeId, setPendingRecipeId] = useState(null)
  const [pendingPersonnes, setPendingPersonnes] = useState(personnes)

  if (!planning?.[day]?.[meal]) return null
  const slot = planning[day][meal]
  const recipe = recipes.find(r => r.id === slot.recipeId)
  if (!recipe) return null

  const version = recipe.versions[slot.versionIdx] || recipe.versions[1]
  const scaledMacros = computeVersionMacros(version)
  const recommendedVersionIdx = quizData ? getVersionIdx(quizData.goal) : 1

  function isOutOfRange(cal) {
    if (!targetCalPerMeal) return false
    return Math.abs(cal - targetCalPerMeal) / targetCalPerMeal > 0.15
  }

  function closeGear() {
    setGearStep(null)
    setPendingVersionIdx(null)
    setPendingRecipeId(null)
  }

  function handleSaveNote() {
    setNote(day, meal, noteInput)
    setShowNote(false)
  }

  function handleVersionSelect(idx) {
    const cal = computeVersionMacros(recipe.versions[idx]).calories
    setPendingVersionIdx(idx)
    if (isOutOfRange(cal)) {
      setGearStep('version-confirm')
    } else {
      changeVersion(day, meal, idx, false)
      closeGear()
    }
  }

  function handleVersionConfirm(propagate) {
    if (propagate) {
      const result = changeVersion(day, meal, pendingVersionIdx, true)
      if (result?.error === 'all_validated') {
        setGearStep('error-all-validated')
        return
      }
    } else {
      changeVersion(day, meal, pendingVersionIdx, false)
    }
    closeGear()
  }

  const isMatin = meal === 'Petit-déjeuner'
  const recipePool = recipes.filter(r => r.cat === (isMatin ? 'sucre' : 'sale'))

  function handleManualRecipeSelect(recipeId) {
    setPendingRecipeId(recipeId)
    setPendingVersionIdx(recommendedVersionIdx)
    setGearStep('recipe-version')
  }

  function handleManualVersionSelect(idx) {
    const rec = recipes.find(r => r.id === pendingRecipeId)
    const cal = computeVersionMacros(rec.versions[idx]).calories
    setPendingVersionIdx(idx)
    if (isOutOfRange(cal)) {
      setGearStep('recipe-confirm')
    } else {
      changeRecipe(day, meal, pendingRecipeId, idx, false)
      closeGear()
    }
  }

  function handleManualConfirm(propagate) {
    if (propagate) {
      const result = changeRecipe(day, meal, pendingRecipeId, pendingVersionIdx, true)
      if (result?.error === 'all_validated') {
        setGearStep('error-all-validated')
        return
      }
    } else {
      changeRecipe(day, meal, pendingRecipeId, pendingVersionIdx, false)
    }
    closeGear()
  }

  function handlePersonnesConfirm() {
    changePersonnes(pendingPersonnes)
    closeGear()
  }

  const overlayStyle = {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 300,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
  }
  const modalStyle = {
    background: 'white', borderRadius: '20px', padding: '24px',
    width: '100%', maxWidth: '380px', maxHeight: '80vh', overflow: 'auto',
  }
  const titleStyle = {
    fontFamily: "'DM Serif Display', serif", fontSize: '18px',
    color: 'var(--text)', marginBottom: '16px',
  }
  const optBtn = (active) => ({
    width: '100%', padding: '12px 16px', borderRadius: '12px', border: 'none',
    background: active ? 'var(--rose-light)' : 'var(--bg)',
    color: active ? 'var(--rose)' : 'var(--text)',
    fontSize: '13px', cursor: 'pointer', textAlign: 'left',
    fontFamily: "'DM Sans', sans-serif", marginBottom: '8px',
    fontWeight: active ? '500' : '400',
  })
  const actBtn = (primary) => ({
    flex: 1, padding: '11px', borderRadius: '12px',
    border: primary ? 'none' : '1px solid var(--border)',
    background: primary ? 'var(--rose)' : 'white',
    color: primary ? 'white' : 'var(--text)',
    fontSize: '13px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
  })

  return (
    <>
      <div
        onClick={() => setShowRecipe(true)}
        style={{
          background: slot.liked ? '#F6FBF7' : 'white',
          border: `1px solid ${slot.liked ? '#7A9E8A' : 'var(--border)'}`,
          borderRadius: '10px', padding: '8px',
          position: 'relative', cursor: 'pointer',
        }}
      >
        <div style={{ height: '48px', borderRadius: '6px', background: 'var(--rose-light)', overflow: 'hidden', marginBottom: '6px' }}>
          <img src={recipe.img} alt={recipe.titre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
        </div>
        <div style={{ fontSize: '9px', fontWeight: '500', color: slot.liked ? '#2D6B47' : 'var(--text)', lineHeight: '1.3', marginBottom: '3px' }}>
          {recipe.titre}
        </div>
        <div style={{ fontSize: '8px', color: 'var(--text-muted)', marginBottom: '5px' }}>
          {scaledMacros.calories} kcal · {version.l}
        </div>
        <div style={{ display: 'flex', gap: '3px' }} onClick={e => e.stopPropagation()}>
          <button onClick={() => likeMeal(day, meal)} title={slot.liked ? 'Retirer' : 'Valider'} style={{ width: '20px', height: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '10px', background: slot.liked ? '#EEF5F1' : 'var(--bg)', color: slot.liked ? '#2D6B47' : 'var(--text-muted)' }}>✓</button>
          <button onClick={() => swapMeal(day, meal)} title="Changer" style={{ width: '20px', height: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '10px', background: 'var(--bg)', color: 'var(--text-muted)' }}>↺</button>
          <button onClick={() => { setNoteInput(slot.note || ''); setShowNote(true) }} title="Note" style={{ width: '20px', height: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '10px', background: slot.note ? 'var(--rose-light)' : 'var(--bg)', color: slot.note ? 'var(--rose)' : 'var(--text-muted)' }}>✎</button>
          <button onClick={() => { setPendingPersonnes(personnes); setGearStep('menu') }} title="Réglages" style={{ width: '20px', height: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '10px', background: 'var(--bg)', color: 'var(--text-muted)' }}>⚙</button>
        </div>
      </div>

      {showRecipe && (
        <RecipeDetail recipe={recipe} versionIdx={slot.versionIdx} personnes={personnes} onClose={() => setShowRecipe(false)} />
      )}

      {showNote && (
        <div style={overlayStyle} onClick={() => setShowNote(false)}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={titleStyle}>Note pour {recipe.titre}</h3>
            <textarea value={noteInput} onChange={e => setNoteInput(e.target.value)} placeholder="Ex: Décongeler le saumon le matin..." style={{ width: '100%', minHeight: '80px', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px 12px', fontSize: '13px', fontFamily: "'DM Sans', sans-serif", outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button onClick={handleSaveNote} style={actBtn(true)}>Enregistrer</button>
              <button onClick={() => setShowNote(false)} style={actBtn(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {gearStep === 'menu' && (
        <div style={overlayStyle} onClick={closeGear}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={titleStyle}>Réglages du repas</h3>
            <button style={optBtn(false)} onClick={() => setGearStep('personnes')}>Nombre de personnes</button>
            <button style={optBtn(false)} onClick={() => setGearStep('version')}>Changer de version</button>
            <button style={optBtn(false)} onClick={() => setGearStep('recipe-list')}>Choisir la recette manuellement</button>
            <button onClick={closeGear} style={{ ...actBtn(false), width: '100%', marginTop: '8px' }}>Fermer</button>
          </div>
        </div>
      )}

      {gearStep === 'personnes' && (
        <div style={overlayStyle} onClick={closeGear}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={titleStyle}>Nombre de personnes</h3>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>S'applique à toutes les recettes du planning.</p>
            {[1, 2, 3, 4].map(n => (
              <button key={n} onClick={() => setPendingPersonnes(n)} style={optBtn(pendingPersonnes === n)}>
                {n === 1 ? 'Juste moi' : n === 4 ? '4 personnes ou plus' : `${n} personnes`}
              </button>
            ))}
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button onClick={handlePersonnesConfirm} style={actBtn(true)}>Confirmer</button>
              <button onClick={() => setGearStep('menu')} style={actBtn(false)}>Retour</button>
            </div>
          </div>
        </div>
      )}

      {gearStep === 'version' && (
        <div style={overlayStyle} onClick={closeGear}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={titleStyle}>Choisir une version</h3>
            {recipe.versions.map((v, i) => {
              const cal = computeVersionMacros(v).calories
              return (
                <button key={i} onClick={() => handleVersionSelect(i)} style={optBtn(slot.versionIdx === i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{v.l}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      {cal} kcal
                      {i === recommendedVersionIdx && <span style={{ marginLeft: '6px', color: 'var(--rose)', fontWeight: '500' }}>recommandé</span>}
                    </span>
                  </div>
                </button>
              )
            })}
            <button onClick={() => setGearStep('menu')} style={{ ...actBtn(false), width: '100%', marginTop: '8px' }}>Retour</button>
          </div>
        </div>
      )}

      {gearStep === 'version-confirm' && (
        <div style={overlayStyle} onClick={closeGear}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={titleStyle}>Adapter le reste du planning ?</h3>
            <div style={{ background: 'var(--rose-light)', borderRadius: '12px', padding: '12px 14px', marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
                Cette version est en dehors de ±15% de ta cible par repas ({targetCalPerMeal} kcal).
                Adapter le planning garantit que tes macros hebdomadaires restent cohérentes avec ton objectif.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={() => handleVersionConfirm(true)} style={{ ...optBtn(false), background: 'var(--rose)', color: 'white' }}>Oui, adapter tout le planning</button>
              <button onClick={() => handleVersionConfirm(false)} style={optBtn(false)}>Non, changer uniquement ce repas</button>
              <button onClick={() => setGearStep('version')} style={optBtn(false)}>← Retour</button>
            </div>
          </div>
        </div>
      )}

      {gearStep === 'recipe-list' && (
        <div style={overlayStyle} onClick={closeGear}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={titleStyle}>Choisir une recette</h3>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {isMatin ? 'Petit-déjeuner' : 'Déjeuner / Dîner'}
            </p>
            {recipePool.map(r => (
              <button key={r.id} onClick={() => handleManualRecipeSelect(r.id)} style={optBtn(r.id === slot.recipeId)}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{r.titre}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                    {computeVersionMacros(r.versions[recommendedVersionIdx]).calories} kcal
                  </span>
                </div>
              </button>
            ))}
            <button onClick={() => setGearStep('menu')} style={{ ...actBtn(false), width: '100%', marginTop: '8px' }}>Retour</button>
          </div>
        </div>
      )}

      {gearStep === 'recipe-version' && (() => {
        const sel = recipes.find(r => r.id === pendingRecipeId)
        if (!sel) return null
        return (
          <div style={overlayStyle} onClick={closeGear}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
              <h3 style={titleStyle}>{sel.titre}</h3>
              {sel.versions.map((v, i) => {
                const cal = computeVersionMacros(v).calories
                return (
                  <button key={i} onClick={() => handleManualVersionSelect(i)} style={optBtn(i === pendingVersionIdx)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        {v.l}
                        {i === recommendedVersionIdx && (
                          <span style={{ marginLeft: '8px', fontSize: '10px', color: 'var(--rose)', fontWeight: '500', background: 'var(--rose-light)', padding: '2px 8px', borderRadius: '8px' }}>
                            recommandé
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{cal} kcal</span>
                    </div>
                  </button>
                )
              })}
              <button onClick={() => setGearStep('recipe-list')} style={{ ...actBtn(false), width: '100%', marginTop: '8px' }}>← Retour</button>
            </div>
          </div>
        )
      })()}

      {gearStep === 'recipe-confirm' && (() => {
        const sel = recipes.find(r => r.id === pendingRecipeId)
        if (!sel) return null
        const selCal = computeVersionMacros(sel.versions[pendingVersionIdx]).calories
        return (
          <div style={overlayStyle} onClick={closeGear}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
              <h3 style={titleStyle}>Adapter le reste du planning ?</h3>
              <div style={{ background: 'var(--rose-light)', borderRadius: '12px', padding: '12px 14px', marginBottom: '16px' }}>
                <p style={{ fontSize: '12px', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
                  <strong>{sel.titre}</strong> ({selCal} kcal) est en dehors de ±15% de ta cible ({targetCalPerMeal} kcal/repas).
                  Adapter le planning garantit la cohérence de tes macros hebdomadaires.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button onClick={() => handleManualConfirm(true)} style={{ ...optBtn(false), background: 'var(--rose)', color: 'white' }}>Oui, adapter tout le planning</button>
                <button onClick={() => handleManualConfirm(false)} style={optBtn(false)}>Non, changer uniquement ce repas</button>
                <button onClick={() => setGearStep('recipe-version')} style={optBtn(false)}>← Retour</button>
              </div>
            </div>
          </div>
        )
      })()}

      {gearStep === 'error-all-validated' && (
        <div style={overlayStyle} onClick={closeGear}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <h3 style={{ ...titleStyle, color: '#c00000' }}>Adaptation impossible</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
              Toutes tes recettes sont déjà validées : il n'y a plus de repas à ajuster pour compenser cet écart calorique.
              Dévalide au moins un repas pour permettre la réadaptation du planning.
            </p>
            <button onClick={closeGear} style={{ ...actBtn(true), width: '100%' }}>Compris</button>
          </div>
        </div>
      )}
    </>
  )
}