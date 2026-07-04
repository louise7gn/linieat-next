'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [partnerCode, setPartnerCode] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cgAccepted, setCgAccepted] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setError('')
    setLoading(true)

    if (partnerCode.trim()) {
      const { data: ambData, error: ambError } = await supabase
        .from('ambassadors')
        .select('id, primary_color, logo_url, features')
        .eq('partner_code', partnerCode.toUpperCase().trim())
        .single()

      if (ambError || !ambData) {
        setError('Code partenaire invalide.')
        setLoading(false)
        return
      }

      localStorage.setItem('pending_partner_code', partnerCode.toUpperCase().trim())
    }

    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback${partnerCode.trim() ? `?partner=${partnerCode.toUpperCase().trim()}` : ''}`,
      },
    })
    if (authError) {
      setError("Erreur lors de l'envoi du mail.")
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
          Un lien de connexion a été envoyé à<br />
          <strong style={{ color: 'var(--text)' }}>{email}</strong>
        </p>
      </div>
    </div>
  )

  const canSubmit = !loading && email && cgAccepted

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif", padding: '20px',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontFamily: "var(--font-molle), serif", fontSize: '52px',
            color: 'var(--text)', fontWeight: '400', letterSpacing: '-1px', margin: 0,
          }}>
            Lin<span style={{ color: 'var(--rose)' }}>i</span>eat
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>
            Ton assistant nutrition personnalisé
          </p>
        </div>

        {/* Formulaire */}
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

          <div>
            <label style={{
              fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.5px',
              display: 'block', marginBottom: '8px',
            }}>Code partenaire <span style={{ fontWeight: '400', textTransform: 'none', fontSize: '11px' }}>(optionnel)</span></label>
            <input
              type="text"
              placeholder="Code de ta salle ou ton coach"
              value={partnerCode}
              onChange={(e) => setPartnerCode(e.target.value)}
              style={{
                width: '100%', padding: '13px 16px',
                border: `1.5px solid ${error ? '#e53e3e' : 'var(--border)'}`,
                borderRadius: '12px', fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                background: 'var(--bg)', color: 'var(--text)',
                outline: 'none', boxSizing: 'border-box',
                letterSpacing: '1px',
              }}
            />
          </div>

          {/* Case à cocher politique de confidentialité */}
          <label style={{
            display: 'flex', alignItems: 'flex-start', gap: '10px',
            cursor: 'pointer',
          }}>
            <input
              type="checkbox"
              checked={cgAccepted}
              onChange={e => setCgAccepted(e.target.checked)}
              style={{ marginTop: '2px', accentColor: 'var(--rose)', flexShrink: 0 }}
            />
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              J'accepte la{' '}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--rose)', textDecoration: 'underline' }}
                onClick={e => e.stopPropagation()}
              >
                politique de confidentialité
              </a>
              {' '}et le traitement de mes données.
            </span>
          </label>

          {error && (
            <p style={{ fontSize: '13px', color: '#e53e3e', margin: 0 }}>{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={!canSubmit}
            style={{
              padding: '14px', borderRadius: '30px', border: 'none',
              background: canSubmit ? 'var(--rose)' : 'var(--border)',
              color: canSubmit ? 'white' : 'var(--text-muted)',
              fontSize: '14px', fontWeight: '500',
              cursor: canSubmit ? 'pointer' : 'not-allowed',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.15s', marginTop: '4px',
            }}
          >
            {loading ? 'Envoi...' : 'Recevoir mon lien →'}
          </button>

        </div>

        {/* Espace ambassadeur */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            onClick={() => router.push('/ambassador/login')}
            style={{
              background: 'none', border: 'none',
              fontSize: '12px', color: 'var(--text-muted)',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'underline', opacity: '0.6',
            }}
          >
            Espace ambassadeur
          </button>
        </div>

      </div>
    </div>
  )
}