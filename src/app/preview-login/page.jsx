'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PreviewLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError]       = useState(false)
  const router       = useRouter()
  const searchParams = useSearchParams()
  const redirect     = searchParams.get('redirect') || '/'

  async function handleSubmit() {
    setError(false)
    const res = await fetch('/api/preview-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push(redirect)
    } else {
      setError(true)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif", padding: '20px',
    }}>
      <div style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>

        <h1 style={{
          fontFamily: "var(--font-molle), serif", fontSize: '44px',
          color: 'var(--text)', fontWeight: '400', marginBottom: '8px',
        }}>
          Lin<span style={{ color: 'var(--rose)' }}>i</span>eat
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          Accès preview — réservé
        </p>

        <div style={{
          background: 'white', borderRadius: '20px',
          border: '0.5px solid var(--border)', padding: '28px',
          display: 'flex', flexDirection: 'column', gap: '14px',
        }}>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            autoFocus
            style={{
              width: '100%', padding: '13px 16px',
              border: `1.5px solid ${error ? '#e53e3e' : 'var(--border)'}`,
              borderRadius: '12px', fontSize: '14px',
              fontFamily: "'DM Sans', sans-serif",
              background: 'var(--bg)', color: 'var(--text)',
              outline: 'none', boxSizing: 'border-box',
            }}
          />
          {error && (
            <p style={{ fontSize: '12px', color: '#e53e3e', margin: 0 }}>
              Mot de passe incorrect.
            </p>
          )}
          <button
            onClick={handleSubmit}
            disabled={!password}
            style={{
              padding: '13px', borderRadius: '30px', border: 'none',
              background: password ? 'var(--rose)' : 'var(--border)',
              color: password ? 'white' : 'var(--text-muted)',
              fontSize: '14px', fontWeight: '500',
              cursor: password ? 'pointer' : 'not-allowed',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Accéder →
          </button>
        </div>

      </div>
    </div>
  )
}