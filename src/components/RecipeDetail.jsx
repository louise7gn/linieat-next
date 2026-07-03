'use client'
import { useState } from 'react'
import { scaleRecipe, computeVersionMacros } from '../data/scaleRecipe'

export default function RecipeDetail({ recipe, versionIdx = 1, onClose, personnes = 1 }) {
  const [activeVersion, setActiveVersion] = useState(versionIdx)

  const version = recipe.versions[activeVersion]
  const { ing } = scaleRecipe(version, null, personnes)   // quantités pour N personnes, rien d'autre
  const macros = computeVersionMacros(version)             // macros fixes de la version — cohérentes avec le planning

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.45)',
        zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white', borderRadius: '24px',
          width: '100%', maxWidth: '680px',
          maxHeight: '88vh', overflow: 'auto',
          boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
        }}
      >
        {/* Image header */}
        <div style={{ height: '220px', background: 'var(--rose-light)', overflow: 'hidden', position: 'relative' }}>
          <img
            src={recipe.img} alt={recipe.titre}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => e.target.style.display = 'none'}
          />
          <button onClick={onClose} style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'white', border: 'none', borderRadius: '50%',
            width: '32px', height: '32px', cursor: 'pointer',
            fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}>×</button>
        </div>

        <div style={{ padding: '24px 28px 32px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: 'var(--text)', marginBottom: '16px' }}>
            {recipe.titre}
          </h2>

          {/* Version tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {recipe.versions.map((v, i) => (
              <button key={i} onClick={() => setActiveVersion(i)} style={{
                padding: '8px 20px', borderRadius: '20px',
                border: `1.5px solid ${activeVersion === i ? 'var(--rose)' : 'var(--border)'}`,
                background: activeVersion === i ? 'var(--rose)' : 'white',
                color: activeVersion === i ? 'white' : 'var(--text)',
                fontSize: '12px', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '500', transition: 'all 0.15s',
              }}>
                {v.l}
              </button>
            ))}
          </div>

          {/* Macros */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {[
              ['Calories', `${macros.calories} kcal`],
              ['Protéines', `${macros.proteines}g`],
              ['Glucides', `${macros.glucides}g`],
              ['Lipides', `${macros.lipides}g`],
            ].map(([label, val]) => (
              <div key={label} style={{ background: 'var(--bg)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text)' }}>{val}</div>
                <div style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Infos */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--bg)', padding: '4px 12px', borderRadius: '8px' }}>
              ⏱ {`${recipe.temps} min`}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--bg)', padding: '4px 12px', borderRadius: '8px' }}>
              {personnes} pers.
            </span>
            <span style={{ fontSize: '11px', color: 'var(--rose)', background: 'var(--rose-light)', padding: '4px 12px', borderRadius: '8px' }}>
              Valeurs CIQUAL 2020
            </span>
            {recipe.tags.includes('batch') && (
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--bg)', padding: '4px 12px', borderRadius: '8px' }}>
                Batch cooking possible
              </span>
            )}
          </div>

          {/* Ingrédients */}
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '10px' }}>
            Ingrédients
          </h3>
          <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
            {ing.map((item, i) => {
              if (item.role === 'condiment' && !item.qtyDisplay) return (
                <li key={i} style={{ padding: '7px 0', borderBottom: '0.5px solid var(--bg)', fontSize: '13px', color: 'var(--text-muted)' }}>
                  {item.name}
                </li>
              )
              return (
                <li key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '7px 0', borderBottom: '0.5px solid var(--bg)',
                  fontSize: '13px', color: 'var(--text)',
                }}>
                  <span>{item.name}</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>{item.qtyDisplay}</span>
                </li>
              )
            })}
          </ul>

          {/* Préparation */}
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '12px' }}>
            Préparation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {version.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: 'var(--rose)', color: 'white',
                  fontSize: '11px', fontWeight: '600',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '1px',
                }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text)', marginBottom: '2px' }}>{step.n}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}