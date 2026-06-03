'use client'

export default function RecipeCard({ recipe, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'white',
        border: '0.5px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{
        height: '180px',
        background: 'var(--rose-light)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={recipe.img}
          alt={recipe.titre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => e.target.style.display = 'none'}
        />
        <span style={{
          position: 'absolute', top: '10px', right: '10px',
          background: 'var(--rose)', color: 'white',
          borderRadius: '20px', fontSize: '9px', fontWeight: '500',
          padding: '3px 10px', textTransform: 'capitalize',
        }}>
          {recipe.tags[0]}
        </span>
      </div>

      {/* Infos */}
      <div style={{ padding: '14px' }}>
        <div style={{
          fontSize: '13px', fontWeight: '500',
          color: 'var(--text)', marginBottom: '8px',
          lineHeight: '1.3',
        }}>
          {recipe.titre}
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '9px', background: 'var(--rose-light)',
            color: 'var(--rose)', borderRadius: '8px',
            padding: '3px 8px', fontWeight: '500',
          }}>
            {recipe.versions[0].k}–{recipe.versions[2].k} kcal
          </span>
          <span style={{
            fontSize: '9px', background: 'var(--bg)',
            color: 'var(--text-muted)', borderRadius: '8px',
            padding: '3px 8px',
          }}>
            ⏱ {recipe.temps} min
          </span>
        </div>
      </div>
    </div>
  )
}