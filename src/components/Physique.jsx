'use client'
import { useState } from 'react'

// Objectifs alignés exactement sur calcMacros.js
// kcal = objectifCalMap[id]
// protein = protFactor pour sport !== 'sedentaire' (cas le plus courant)
const objectives = [
  {
    id: 'perte',
    label: 'Perdre du poids',
    desc: "Déficit modéré de 300 kcal/jour pour perdre de la graisse tout en préservant le muscle.",
    kcal: -300,
    protein: '1.2–1.6',
    lipides: '25%',
    priorite: 'Déficit',
    tags: ['Déficit modéré', 'Protéines élevées', 'Préservation musculaire'],
    color: '#C8780A',
  },
  {
    id: 'muscu',
    label: 'Prendre du muscle',
    desc: "Surplus de 300 kcal/jour pour maximiser la synthèse protéique et la prise de masse.",
    kcal: +300,
    protein: '1.6–2.0',
    lipides: '30%',
    priorite: 'Surplus',
    tags: ['Surplus calorique', 'Musculation', 'Récupération'],
    color: '#2E5090',
  },
  {
    id: 'cardio',
    label: 'Améliorer mon cardio',
    desc: "Léger surplus de 150 kcal/jour. Glucides prioritaires pour alimenter l'endurance.",
    kcal: +150,
    protein: '1.4',
    lipides: '20%',
    priorite: 'Surplus glucides',
    tags: ['Glucides prioritaires', 'Endurance', 'Glycogène'],
    color: '#885020',
  },
  {
    id: 'sante',
    label: 'Fit & tonique',
    desc: "Rééquilibrage alimentaire sans déficit. Corps tonique et énergie au quotidien.",
    kcal: 0,
    protein: '1.2–1.4',
    lipides: '28%',
    priorite: 'Équilibre',
    tags: ['Équilibre calorique', 'Tonus musculaire', 'Bien-être'],
    color: '#4A7840',
  },
  {
    id: 'maintien',
    label: 'Maintenir mon poids',
    desc: "Garder son poids de forme actuel. Alimentation flexible et sans contrainte.",
    kcal: 0,
    protein: '0.8–1.4',
    lipides: '30%',
    priorite: 'Équilibre',
    tags: ['Maintenance', 'Flexibilité', 'Sport régulier'],
    color: '#555555',
  },
]

export default function Physique() {
  const [selected, setSelected] = useState(null)
  const selectedObj = objectives.find(o => o.id === selected)

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>

      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '8px' }}>
          Objectifs physiques
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: 'var(--text)', marginBottom: '6px' }}>
          Ton objectif. On t'emmène là-bas.
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300' }}>
          Clique sur un objectif pour voir les recommandations nutritionnelles associées.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
        {objectives.map(obj => (
          <div
            key={obj.id}
            onClick={() => setSelected(selected === obj.id ? null : obj.id)}
            style={{
              background: 'white',
              border: `2px solid ${selected === obj.id ? obj.color : 'var(--border)'}`,
              borderRadius: '16px', padding: '20px 18px',
              cursor: 'pointer', transition: 'all 0.15s',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: obj.color, borderRadius: '16px 16px 0 0' }} />
            <div style={{ marginTop: '4px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: selected === obj.id ? obj.color : 'var(--text)', marginBottom: '8px', fontFamily: "'DM Serif Display', serif" }}>
                {obj.label}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '300', lineHeight: '1.6', marginBottom: '12px' }}>
                {obj.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {obj.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '9px', padding: '2px 8px', borderRadius: '8px', fontWeight: '500',
                    background: selected === obj.id ? obj.color + '20' : 'var(--bg)',
                    color: selected === obj.id ? obj.color : 'var(--text-muted)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {selected === obj.id && (
              <div style={{ position: 'absolute', top: '12px', right: '12px', width: '20px', height: '20px', borderRadius: '50%', background: obj.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700' }}>
                ✓
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedObj && (
        <div style={{ background: 'white', borderRadius: '20px', border: `1.5px solid ${selectedObj.color}`, padding: '24px 28px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', marginBottom: '16px', color: selectedObj.color }}>
            {selectedObj.label}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {[
              { label: 'Ajustement calories',   val: selectedObj.kcal > 0 ? `+${selectedObj.kcal}` : `${selectedObj.kcal}`, unit: 'kcal/jour'       },
              { label: 'Protéines recommandées', val: selectedObj.protein,                                                    unit: 'g / kg de poids'  },
              { label: 'Lipides',                val: selectedObj.lipides,                                                    unit: 'des calories'      },
              { label: 'Priorité',               val: selectedObj.priorite,                                                   unit: 'calorique'         },
            ].map(s => (
              <div key={s.label} style={{ background: 'var(--bg)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: '500', color: selectedObj.color }}>{s.val}</div>
                <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.unit}</div>
                <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '300' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!selected && (
        <div style={{ background: 'var(--rose-light)', borderRadius: '16px', padding: '20px 24px', textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
          Clique sur un objectif pour voir les détails et les recommandations nutritionnelles.
        </div>
      )}
    </div>
  )
}