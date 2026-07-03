'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const objectivesFemme = [
  {
    id: 'mince-tonique',
    label: 'Mince & tonique',
    desc: 'Corps léger, musclé et défini. Perdre de la graisse tout en conservant du muscle.',
    kcal: -300, protein: 1.8,
    tags: ['Déficit calorique modéré', 'Cardio + muscu', 'Protéines élevées'],
    color: '#C8780A',
  },
  {
    id: 'fit-athletique',
    label: 'Fit & athlétique',
    desc: 'Corps sportif, endurant et tonique. L\'objectif le plus équilibré.',
    kcal: -150, protein: 2.0,
    tags: ['Léger déficit', 'Mix sport', 'Récupération'],
    color: '#8A5A18',
  },
  {
    id: 'maintien',
    label: 'Maintien',
    desc: 'Garder son poids et rester en forme sans contrainte.',
    kcal: 0, protein: 1.6,
    tags: ['Équilibre calorique', 'Sport régulier', 'Flexibilité'],
    color: '#4A7840',
  },
  {
    id: 'prise-masse',
    label: 'Prise de masse',
    desc: 'Développer le muscle et la force. Surplus calorique contrôlé.',
    kcal: 300, protein: 2.2,
    tags: ['Surplus calorique', 'Musculation', 'Sommeil & récup'],
    color: '#2E5090',
  },
  {
    id: 'cardio',
    label: 'Performance cardio',
    desc: 'Endurance, énergie et performance sportive. Glucides prioritaires.',
    kcal: 200, protein: 1.6,
    tags: ['Surplus glucides', 'Endurance', 'Hydratation'],
    color: '#885020',
  },
]

const objectivesHomme = [
  {
    id: 'mince-tonique',
    label: 'Mince & tonique',
    desc: 'Corps sec et musclé. Perdre le gras superflu sans perdre le muscle.',
    kcal: -400, protein: 2.0,
    tags: ['Déficit calorique', 'Musculation', 'Protéines élevées'],
    color: '#C8780A',
  },
  {
    id: 'fit-athletique',
    label: 'Fit & athlétique',
    desc: 'Corps sportif et fonctionnel. L\'objectif le plus polyvalent.',
    kcal: -200, protein: 2.2,
    tags: ['Léger déficit', 'Mix sport', 'Performance'],
    color: '#8A5A18',
  },
  {
    id: 'maintien',
    label: 'Maintien',
    desc: 'Garder son poids de forme actuel.',
    kcal: 0, protein: 1.8,
    tags: ['Équilibre', 'Sport régulier', 'Flexibilité'],
    color: '#4A7840',
  },
  {
    id: 'prise-masse',
    label: 'Prise de masse',
    desc: 'Maximiser la prise de muscle avec un surplus calorique propre.',
    kcal: 400, protein: 2.4,
    tags: ['Surplus calorique', 'Musculation lourde', 'Récupération'],
    color: '#2E5090',
  },
  {
    id: 'hypertrophie',
    label: 'Hypertrophie',
    desc: 'Développement musculaire maximal. Nutrition ultra-ciblée.',
    kcal: 500, protein: 2.6,
    tags: ['Surplus élevé', 'Prog. muscu', 'Protéines max'],
    color: '#5A2080',
  },
]

export default function Physique() {
  const router = useRouter()
  const [genre, setGenre] = useState('femme')
  const [selected, setSelected] = useState(null)

  const objectives = genre === 'femme' ? objectivesFemme : objectivesHomme
  const selectedObj = objectives.find(o => o.id === selected)

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>

      {/* Titre */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '8px' }}>
          Objectifs physiques
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: 'var(--text)', marginBottom: '6px' }}>
          Ton objectif. On t'emmène là-bas.
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300' }}>
          Petits ou grands objectifs — voilà ce qui fonctionne selon où tu veux aller.
        </p>
      </div>

      {/* Toggle genre */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {['femme', 'homme'].map(g => (
          <button key={g} onClick={() => { setGenre(g); setSelected(null) }} style={{
            padding: '10px 24px', borderRadius: '20px',
            border: `2px solid ${genre === g ? 'var(--rose)' : 'var(--border)'}`,
            background: genre === g ? 'var(--rose)' : 'white',
            color: genre === g ? 'white' : 'var(--text)',
            fontSize: '13px', fontWeight: '500',
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.15s',
          }}>
            {g === 'femme' ? 'Femme' : 'Homme'}
          </button>
        ))}
      </div>

      {/* Grille objectifs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px', marginBottom: '24px',
      }}>
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
            {/* Barre couleur en haut */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '4px', background: obj.color,
              borderRadius: '16px 16px 0 0',
            }} />

            <div style={{ marginTop: '4px' }}>
              <h3 style={{
                fontSize: '15px', fontWeight: '600',
                color: selected === obj.id ? obj.color : 'var(--text)',
                marginBottom: '8px', fontFamily: "'DM Serif Display', serif",
              }}>
                {obj.label}
              </h3>
              <p style={{
                fontSize: '12px', color: 'var(--text-muted)',
                fontWeight: '300', lineHeight: '1.6', marginBottom: '12px',
              }}>
                {obj.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {obj.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '9px', padding: '2px 8px',
                    borderRadius: '8px', fontWeight: '500',
                    background: selected === obj.id ? obj.color + '20' : 'var(--bg)',
                    color: selected === obj.id ? obj.color : 'var(--text-muted)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {selected === obj.id && (
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                width: '20px', height: '20px', borderRadius: '50%',
                background: obj.color, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: '700',
              }}>
                ✓
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Détail objectif sélectionné */}
      {selectedObj && (
        <div style={{
          background: 'white', borderRadius: '20px',
          border: `1.5px solid ${selectedObj.color}`,
          padding: '24px 28px', marginBottom: '24px',
        }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '22px', marginBottom: '16px',
            color: selectedObj.color,
          }}>
            {selectedObj.label}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Ajustement calories', val: selectedObj.kcal > 0 ? `+${selectedObj.kcal}` : `${selectedObj.kcal}`, unit: 'kcal/jour' },
              { label: 'Protéines recommandées', val: `${selectedObj.protein}`, unit: 'g / kg de poids' },
              { label: 'Priorité', val: selectedObj.kcal < 0 ? 'Déficit' : selectedObj.kcal > 0 ? 'Surplus' : 'Équilibre', unit: 'calorique' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'var(--bg)', borderRadius: '12px',
                padding: '14px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '20px', fontWeight: '500', color: selectedObj.color }}>{s.val}</div>
                <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.unit}</div>
                <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: '300' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA si rien sélectionné */}
      {!selected && (
        <div style={{
          background: 'var(--rose-light)', borderRadius: '16px',
          padding: '20px 24px', textAlign: 'center',
          fontSize: '13px', color: 'var(--text-muted)',
        }}>
          Clique sur un objectif pour voir les détails et les recommandations nutritionnelles !
        </div>
      )}
    </div>
  )
}