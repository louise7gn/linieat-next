'use client'
import { useRouter } from 'next/navigation'
import { recipes } from '../data/recipes'

export default function RecipesPreview() {
  const router = useRouter()
  const preview = recipes.slice(0, 4)

  return (
    <section style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: 'var(--text)' }}>
          Des recettes qui te font envie
        </h2>
        <span
          onClick={() => router.push('/recettes')}
          style={{ fontSize: '13px', color: 'var(--rose)', cursor: 'pointer', fontWeight: '500' }}>
          Voir tout →
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {preview.map((rec) => (
          <div key={rec.id} onClick={() => router.push('/recettes')} style={{
            background: 'white',
            border: '0.5px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}>
            <div style={{ height: '120px', background: 'var(--rose-light)', overflow: 'hidden' }}>
              <img
                src={rec.img}
                alt={rec.titre}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div style={{ padding: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text)', marginBottom: '4px' }}>{rec.titre}</div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                {rec.versions[0].k}–{rec.versions[2].k} kcal · {rec.temps} min
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}