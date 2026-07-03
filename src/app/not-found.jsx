'use client'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'

export default function NotFound() {
  const router = useRouter()
  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>✦</div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: 'var(--text)', marginBottom: '12px' }}>
          Page introuvable
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '28px' }}>
          Cette page n'existe pas ou a été déplacée.
        </p>
        <button onClick={() => router.push('/')} style={{
          background: 'var(--rose)', color: 'white', border: 'none',
          borderRadius: '30px', padding: '14px 28px', fontSize: '14px',
          cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
        }}>
          Retour à l'accueil
        </button>
      </div>
    </Layout>
  )
}