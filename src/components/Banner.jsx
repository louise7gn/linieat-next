'use client'
import { useRouter } from 'next/navigation'

export default function Banner() {
  const router = useRouter()

  return (
    <section style={{
      background: 'white',
      borderRadius: '24px',
      border: '0.5px solid var(--border)',
      padding: '52px 48px',
      marginBottom: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--rose-light)',
        color: 'var(--rose)',
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        padding: '4px 12px',
        borderRadius: '20px',
        width: 'fit-content',
      }}>
        No bullshit. Juste des résultats.
      </div>

      <h1 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: '58px',
        color: 'var(--text)',
        lineHeight: '1.05',
        letterSpacing: '-1px',
      }}>
        Mange ce que<br />tu veux.<br />
        <span style={{ color: 'var(--rose)' }}>Atteins ce que<br />tu veux.</span>
      </h1>

      <p style={{
        fontSize: '15px',
        color: 'var(--text-muted)',
        fontWeight: '300',
        lineHeight: '1.7',
        maxWidth: '480px',
      }}>
        Ton corps, tes règles. Linieat calcule tout pour que tu n'aies qu'à cuisiner.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <button
          onClick={() => router.push('/quiz')}
          style={{
            background: 'var(--rose)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '14px 28px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}>
          C'est parti →
        </button>
        <button
          onClick={() => router.push('/recettes')}
          style={{
            background: 'white',
            color: 'var(--text)',
            border: '0.5px solid var(--border)',
            borderRadius: '30px',
            padding: '14px 28px',
            fontSize: '14px',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
          }}>
          Voir les recettes
        </button>
      </div>
    </section>
  )
}