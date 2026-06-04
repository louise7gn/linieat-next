'use client'
import { useState, useRef, useEffect } from 'react'

function calcMacros(genre, age, poids, taille, sport, objectif, sportType) {
  // Mifflin-St Jeor
  let bmr
  if (genre === 'femme') {
    bmr = 10 * poids + 6.25 * taille - 5 * age - 161
  } else {
    bmr = 10 * poids + 6.25 * taille - 5 * age + 5
  }

  const activityMap = {
    'sedentaire': 1.2,
    'leger': 1.375,
    'modere': 1.55,
    'actif': 1.725,
    'tres-actif': 1.9,
  }
  const tdee = bmr * (activityMap[sport] || 1.375)

  const objectifMap = {
    'perte': -400,
    'muscu': +300,
    'fit': -150,
    'maintien': 0,
    'sante': 0,
    'cardio': +200,
  }
  const calories = Math.round(tdee + (objectifMap[objectif] || 0))

  const sportTypeMap = {
    'muscu': 2.2,
    'mix': 1.8,
    'cardio': 1.5,
    'autre': 1.6,
  }
  const protFactor = sportTypeMap[sportType] || 1.6
  const proteines = Math.round(poids * protFactor)
  const lipides = Math.round((calories * 0.25) / 9)
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

function PieChart({ proteines, glucides, lipides }) {
  const total = proteines * 4 + glucides * 4 + lipides * 9
  const pPct = (proteines * 4 / total) * 100
  const gPct = (glucides * 4 / total) * 100
  const lPct = (lipides * 9 / total) * 100

  const size = 180
  const cx = size / 2
  const cy = size / 2
  const r = 70
  const innerR = 42

  function slice(startPct, endPct, color) {
    const start = (startPct / 100) * 2 * Math.PI - Math.PI / 2
    const end = (endPct / 100) * 2 * Math.PI - Math.PI / 2
    const x1 = cx + r * Math.cos(start)
    const y1 = cy + r * Math.sin(start)
    const x2 = cx + r * Math.cos(end)
    const y2 = cy + r * Math.sin(end)
    const ix1 = cx + innerR * Math.cos(start)
    const iy1 = cy + innerR * Math.sin(start)
    const ix2 = cx + innerR * Math.cos(end)
    const iy2 = cy + innerR * Math.sin(end)
    const large = endPct - startPct > 50 ? 1 : 0
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerR} ${innerR} 0 ${large} 0 ${ix1} ${iy1} Z`
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={slice(0, pPct, '#C8780A')} fill="var(--rose)" />
      <path d={slice(pPct, pPct + gPct, '#F0B030')} fill="var(--rose-mid)" />
      <path d={slice(pPct + gPct, 100, '#FAE8B0')} fill="var(--rose-soft)" />
      <circle cx={cx} cy={cy} r={innerR} fill="white" />
    </svg>
  )
}

const inputStyle = {
  width: '100%', padding: '12px 16px',
  border: '1.5px solid var(--border)', borderRadius: '12px',
  fontSize: '15px', fontFamily: "'DM Sans', sans-serif",
  outline: 'none', background: 'white', color: 'var(--text)',
  transition: 'border-color 0.15s',
}

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer', appearance: 'none',
}

export default function Macros() {
  const [form, setForm] = useState({
    genre: 'femme',
    age: '',
    poids: '',
    taille: '',
    sport: 'modere',
    objectif: 'fit',
    sportType: 'mix',
  })
  const [result, setResult] = useState(null)

  function set(key, val) {
    setForm(prev => ({ ...prev, [key]: val }))
  }

  function handleCalc() {
    const { genre, age, poids, taille, sport, objectif, sportType } = form
    if (!age || !poids || !taille) return
    const r = calcMacros(genre, Number(age), Number(poids), Number(taille), sport, objectif, sportType)
    setResult(r)
  }

  const canCalc = form.age && form.poids && form.taille

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>

      {/* Titre */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '8px' }}>
          Calculateur
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: 'var(--text)', marginBottom: '6px' }}>
          Tes besoins nutritifs
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300' }}>
          Calculé avec la formule Mifflin-St Jeor — la plus précise selon les études nutritionnelles.
        </p>
      </div>

      {/* Formulaire */}
      <div style={{
        background: 'white', borderRadius: '20px',
        border: '0.5px solid var(--border)', padding: '28px 32px',
        marginBottom: '24px',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>

          {/* Genre */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
              Genre
            </label>
            <select value={form.genre} onChange={e => set('genre', e.target.value)} style={selectStyle}>
              <option value="femme">Femme</option>
              <option value="homme">Homme</option>
            </select>
          </div>

          {/* Âge */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
              Âge
            </label>
            <input
              type="number" value={form.age}
              onChange={e => set('age', e.target.value)}
              placeholder="Ex : 22" min={15} max={80}
              style={inputStyle}
            />
          </div>

          {/* Poids */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
              Poids (kg)
            </label>
            <input
              type="number" value={form.poids}
              onChange={e => set('poids', e.target.value)}
              placeholder="Ex : 65" min={30} max={200}
              style={inputStyle}
            />
          </div>

          {/* Taille */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
              Taille (cm)
            </label>
            <input
              type="number" value={form.taille}
              onChange={e => set('taille', e.target.value)}
              placeholder="Ex : 170" min={130} max={220}
              style={inputStyle}
            />
          </div>

          {/* Activité */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
              Activité physique
            </label>
            <select value={form.sport} onChange={e => set('sport', e.target.value)} style={selectStyle}>
              <option value="sedentaire">Sédentaire</option>
              <option value="leger">1-2x / semaine</option>
              <option value="modere">3-4x / semaine</option>
              <option value="actif">5-6x / semaine</option>
              <option value="tres-actif">Tous les jours</option>
            </select>
          </div>

          {/* Type de sport */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
              Type de sport
            </label>
            <select value={form.sportType} onChange={e => set('sportType', e.target.value)} style={selectStyle}>
              <option value="muscu">Musculation</option>
              <option value="mix">Mix muscu + cardio</option>
              <option value="cardio">Cardio</option>
              <option value="autre">Autre</option>
            </select>
          </div>

        </div>

        {/* Objectif */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '10px' }}>
            Objectif
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {[
              { value: 'perte', label: 'Perte de poids' },
              { value: 'fit', label: 'Fit & tonique' },
              { value: 'muscu', label: 'Prise de muscle' },
              { value: 'maintien', label: 'Maintien' },
              { value: 'sante', label: 'Santé' },
              { value: 'cardio', label: 'Performance' },
            ].map(o => (
              <button key={o.value} onClick={() => set('objectif', o.value)} style={{
                padding: '10px', borderRadius: '12px',
                border: `1.5px solid ${form.objectif === o.value ? 'var(--rose)' : 'var(--border)'}`,
                background: form.objectif === o.value ? 'var(--rose-light)' : 'white',
                color: form.objectif === o.value ? 'var(--rose)' : 'var(--text)',
                fontSize: '12px', fontWeight: form.objectif === o.value ? '500' : '400',
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.15s',
              }}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton calculer */}
        <button
          onClick={handleCalc}
          disabled={!canCalc}
          style={{
            width: '100%', padding: '14px',
            background: canCalc ? 'var(--rose)' : 'var(--border)',
            color: canCalc ? 'white' : 'var(--text-muted)',
            border: 'none', borderRadius: '14px',
            fontSize: '14px', fontWeight: '500',
            cursor: canCalc ? 'pointer' : 'not-allowed',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.15s',
          }}
        >
          Calculer mes besoins →
        </button>
      </div>

      {/* Résultats */}
      {result && (
        <div style={{
          background: 'white', borderRadius: '20px',
          border: '0.5px solid var(--border)', padding: '28px 32px',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', color: 'var(--text)', marginBottom: '20px' }}>
            Tes besoins quotidiens
          </h2>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap' }}>
            <PieChart proteines={result.proteines} glucides={result.glucides} lipides={result.lipides} />

            <div style={{ flex: 1, minWidth: '200px' }}>
              {[
                { label: 'Protéines', val: `${result.proteines}g`, color: 'var(--rose)', sub: `${result.proteines * 4} kcal` },
                { label: 'Glucides', val: `${result.glucides}g`, color: 'var(--rose-mid)', sub: `${result.glucides * 4} kcal` },
                { label: 'Lipides', val: `${result.lipides}g`, color: 'var(--rose-soft)', sub: `${result.lipides * 9} kcal` },
              ].map(m => (
                <div key={m.label} style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', padding: '10px 0',
                  borderBottom: '0.5px solid var(--bg)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: m.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--text)' }}>{m.label}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '16px', fontWeight: '500', color: 'var(--text)' }}>{m.val}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calories + détails */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {[
              { label: 'Calories / jour', val: `${result.calories}`, unit: 'kcal', color: 'var(--rose)' },
              { label: 'Métabolisme de base', val: `${result.bmr}`, unit: 'kcal', color: 'var(--text-muted)' },
              { label: 'Dépense totale', val: `${result.tdee}`, unit: 'kcal', color: 'var(--text-muted)' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'var(--bg)', borderRadius: '12px', padding: '14px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '22px', fontWeight: '500', color: s.color }}>{s.val}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.unit}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '300' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Note */}
      {result && (
        <div style={{
          background: 'var(--rose-light)', borderRadius: '14px',
          padding: '16px 20px', fontSize: '12px',
          color: 'var(--text-muted)', lineHeight: '1.6',
        }}>
        Ces chiffres sont une estimation basée sur ta physiologie. Ton corps, tes règles — ajuste selon tes sensations et tes résultats réels.
        </div>
      )}
    </div>
  )
}