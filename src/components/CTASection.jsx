'use client'
import { useRouter } from 'next/navigation'

export default function CTASection() {
  const router = useRouter()

  return (
    <section style={{
      background: '#1A0E00',
      borderRadius: '24px',
      padding: '52px 60px',
      textAlign: 'center',
      marginBottom: '16px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose-mid)', fontWeight: '500', marginBottom: '12px' }}>
        Gratuit · Sans engagement
      </p>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: 'white', marginBottom: '10px', lineHeight: '1.2' }}>
        Prêt à manger<br />comme jamais ?
      </h2>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', fontWeight: '300', marginBottom: '28px', lineHeight: '1.6' }}>
        Ton profil en 5 minutes. Tes recettes calculées pour toi.<br />Zéro privation. Que des résultats.
      </p>
      <button
        onClick={() => router.push('/quiz')}
        style={{
          background: 'var(--rose-mid)',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          padding: '16px 40px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
        }}>
        Créer mon profil gratuit →
      </button>
      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '14px' }}>
        Aucune carte bancaire requise
      </p>
    </section>
  )
}