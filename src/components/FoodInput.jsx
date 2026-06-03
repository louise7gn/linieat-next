'use client'
import { useState } from 'react'
import { foodDB } from '../data/foodDB'

function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
}

export default function FoodInput({ value = [], onChange, type }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  function handleInput(e) {
    const q = e.target.value
    setQuery(q)
    if (q.length < 1) { setSuggestions([]); return }
    const results = foodDB.filter(f => normalize(f).includes(normalize(q))).slice(0, 8)
    setSuggestions(results)
  }

  function addFood(food) {
    if (!value.includes(food)) onChange([...value, food])
    setQuery('')
    setSuggestions([])
  }

  function removeFood(food) {
    onChange(value.filter(f => f !== food))
  }

  const color = type === 'love' ? 'var(--rose)' : '#D32F2F'
  const bg = type === 'love' ? 'var(--rose-light)' : '#FDE8E8'

  return (
    <div>
      {/* Tags sélectionnés */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
        {value.map(food => (
          <span key={food} style={{
            background: bg, color: color,
            borderRadius: '20px', padding: '4px 10px 4px 12px',
            fontSize: '12px', fontWeight: '500',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            {food}
            <button onClick={() => removeFood(food)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: color, fontSize: '14px', lineHeight: '1',
              padding: '0',
            }}>×</button>
          </span>
        ))}
      </div>

      {/* Input */}
      <div style={{ position: 'relative' }}>
        <input
          value={query}
          onChange={handleInput}
          placeholder={type === 'love' ? 'Ex : Avocat, Saumon...' : 'Ex : Brocoli, Champignons...'}
          style={{
            width: '100%', padding: '12px 16px',
            border: '1px solid var(--border)', borderRadius: '12px',
            fontSize: '13px', fontFamily: "'DM Sans', sans-serif",
            outline: 'none', background: 'var(--bg)',
          }}
        />

        {suggestions.length > 0 && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'white', border: '1px solid var(--border)',
            borderRadius: '12px', marginTop: '4px',
            zIndex: 10, overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}>
            {suggestions.map(s => (
              <div
                key={s}
                onMouseDown={() => addFood(s)}
                style={{
                  padding: '10px 16px', cursor: 'pointer',
                  fontSize: '13px', color: 'var(--text)',
                  borderBottom: '0.5px solid var(--bg)',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--rose-light)'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}