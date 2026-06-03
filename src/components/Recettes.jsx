'use client'
import { useState } from 'react'
import { recipes } from '../data/recipes'
import RecipeCard from './RecipeCard'
import RecipeDetail from './RecipeDetail'

const filters = ['Tout', 'express', 'batch', 'vegan', 'occasion']

export default function Recettes() {
  const [tab, setTab] = useState('sale')
  const [filter, setFilter] = useState('Tout')
  const [selected, setSelected] = useState(null)

  const filtered = recipes
    .filter(r => r.cat === tab)
    .filter(r => filter === 'Tout' || r.tags.includes(filter))

  return (
    <div style={{ paddingTop: '16px' }}>
      <h1 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: '32px', color: 'var(--text)', marginBottom: '6px'
      }}>
        Recettes
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300', marginBottom: '20px' }}>
        Des recettes qui performent autant qu'elles régalent.
      </p>

      {/* Onglets Salé / Sucré */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['sale', 'sucre'].map(t => (
          <button key={t} onClick={() => { setTab(t); setFilter('Tout') }} style={{
            padding: '10px 28px', borderRadius: '20px',
            border: `2px solid ${tab === t ? 'var(--rose)' : 'var(--border)'}`,
            background: tab === t ? 'var(--rose)' : 'white',
            color: tab === t ? 'white' : 'var(--text)',
            fontSize: '13px', fontWeight: '500', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.15s',
          }}>
            {t === 'sale' ? 'Salé' : 'Sucré'}
          </button>
        ))}
      </div>

      {/* Filtres */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '5px 14px', borderRadius: '12px',
            border: `1px solid ${filter === f ? 'var(--rose)' : 'var(--border)'}`,
            background: filter === f ? 'var(--rose-light)' : 'white',
            color: filter === f ? 'var(--rose)' : 'var(--text-muted)',
            fontSize: '11px', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: filter === f ? '500' : '400',
            transition: 'all 0.15s',
          }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grille recettes */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          color: 'var(--text-muted)', fontSize: '14px',
        }}>
          Aucune recette pour ce filtre.
        </div>
      ) : (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px', marginBottom: '40px'
        }}>
          {filtered.map(rec => (
            <RecipeCard key={rec.id} recipe={rec} onClick={() => setSelected(rec)} />
          ))}
        </div>
      )}

      {/* Modal détail */}
      {selected && <RecipeDetail recipe={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}