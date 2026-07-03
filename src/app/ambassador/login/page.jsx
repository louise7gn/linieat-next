'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function AmbassadorLoginPage() {
  const [email, setEmail] = useState('')
  const [ambassadorCode, setAmbassadorCode] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    setError('')
    setLoading(true)

    // Vérifier le code ambassadeur
    const { data: ambData, error: ambError } = await supabase
      .from('ambassadors')
      .select('id')
      .eq('ambassador_code', ambassadorCode.toUpperCase().trim())
      .single()

    if (ambError || !ambData) {
      setError('Code ambassadeur invalide.')
      setLoading(false)
      return
    }

    localStorage.setItem('pending_ambassador_code', ambassadorCode.toUpperCase().trim())

    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/ambassador/dashboard`,
      },
    })

    if (authError) {
      setError('Erreur lors de l\'envoi du mail.')
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  if (sent) return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif", padding: '20px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'var(--rose-light)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: '22px',
        }}>✉</div>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif", fontSize: '26px',
          color: 'var(--text)', marginBottom: '10px', fontWeight: '400',
        }}>Vérifie tes mails</h1>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Lien envoyé à <strong style={{ color: 'var(--text)' }}>{email}</strong>
        </p>
      </div>
    </div>
  )

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif", padding: '20px',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontFamily: "var(--font-molle), serif", fontSize: '52px',
            color: 'var(--text)', fontWeight: '400', letterSpacing: '-1px', margin: 0,
          }}>
            Lin<span style={{ color: 'var(--rose)' }}>i</span>eat
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>
            Espace ambassadeur
          </p>
        </div>

        <div style={{
          background: 'white', borderRadius: '20px',
          border: '0.5px solid var(--border)', padding: '32px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>

          <div>
            <label style={{
              fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.5px',
              display: 'block', marginBottom: '8px',
            }}>Code ambassadeur</label>
            <input
              type="text"
              placeholder="Ton code ambassadeur"
              value={ambassadorCode}
              onChange={(e) => setAmbassadorCode(e.target.value)}
              style={{
                width: '100%', padding: '13px 16px',
                border: `1.5px solid ${error ? '#e53e3e' : 'var(--border)'}`,
                borderRadius: '12px', fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                background: 'var(--bg)', color: 'var(--text)',
                outline: 'none', boxSizing: 'border-box', letterSpacing: '1px',
              }}
            />
          </div>

          <div>
            <label style={{
              fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.5px',
              display: 'block', marginBottom: '8px',
            }}>Adresse email</label>
            <input
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '13px 16px',
                border: `1.5px solid ${error ? '#e53e3e' : 'var(--border)'}`,
                borderRadius: '12px', fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                background: 'var(--bg)', color: 'var(--text)',
                outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <p style={{ fontSize: '13px', color: '#e53e3e', margin: 0 }}>{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !email || !ambassadorCode}
            style={{
              padding: '14px', borderRadius: '30px', border: 'none',
              background: loading || !email || !ambassadorCode ? 'var(--border)' : 'var(--rose)',
              color: loading || !email || !ambassadorCode ? 'var(--text-muted)' : 'white',
              fontSize: '14px', fontWeight: '500',
              cursor: loading || !email || !ambassadorCode ? 'not-allowed' : 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.15s', marginTop: '4px',
            }}
          >
            {loading ? 'Vérification...' : 'Accéder à mon espace →'}
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => router.push('/login')}
            style={{
              background: 'none', border: 'none',
              fontSize: '12px', color: 'var(--text-muted)',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'underline', opacity: '0.6',
            }}
          >
            ← Retour connexion client
          </button>
        </div>

      </div>
    </div>
  )
}