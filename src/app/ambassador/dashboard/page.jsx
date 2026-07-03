'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'
import AuthGuard from '@/components/AuthGuard'

function AmbassadorDashboard() {
  const router = useRouter()
  const [ambassador, setAmbassador] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [feedbacks, setFeedbacks] = useState([])
  const [newFeedback, setNewFeedback] = useState('')
  const [selectedClient, setSelectedClient] = useState(null)
  const [clients, setClients] = useState([])
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)

const PALETTES = {
  '#815f4a': {
    '--rose': '#815f4a',
    '--rose-light': '#f2ebe6',
    '--rose-mid': '#a07860',
    '--rose-dark': '#2e1a0e',
    '--rose-soft': '#d4b8a8',
    '--text': '#1a0e08',
    '--text-muted': '#4a2e1a',
    '--text-light': '#a07860',
    '--border': '#d4b8a8',
    '--bg': '#faf6f3',
    '--sage': '#a07860',
    '--sage-light': '#e8d8cc',
  },
  '#ff6b16': {
    '--rose': '#ff6b16',
    '--rose-light': '#fff0e8',
    '--rose-mid': '#ff9a5c',
    '--rose-dark': '#2e1000',
    '--rose-soft': '#ffd0b0',
    '--text': '#1a0800',
    '--text-muted': '#4a1e00',
    '--text-light': '#ff9a5c',
    '--border': '#ffd0b0',
    '--bg': '#fffaf7',
    '--sage': '#ff9a5c',
    '--sage-light': '#ffe8d4',
  },
  '#7fc77f': {
    '--rose': '#7fc77f',
    '--rose-light': '#eef7ee',
    '--rose-mid': '#a0d4a0',
    '--rose-dark': '#0e2e0e',
    '--rose-soft': '#c8e8c8',
    '--text': '#081a08',
    '--text-muted': '#1a4a1a',
    '--text-light': '#5a9e5a',
    '--border': '#c8e8c8',
    '--bg': '#f7fbf7',
    '--sage': '#5a9e5a',
    '--sage-light': '#daf0da',
  },
  '#4d8fda': {
    '--rose': '#4d8fda',
    '--rose-light': '#e8f2fc',
    '--rose-mid': '#7aaeea',
    '--rose-dark': '#0a1e3a',
    '--rose-soft': '#b8d4f4',
    '--text': '#061020',
    '--text-muted': '#1a3a5a',
    '--text-light': '#7aaeea',
    '--border': '#b8d4f4',
    '--bg': '#f5f9fe',
    '--sage': '#7aaeea',
    '--sage-light': '#d4e8f8',
  },
  '#b81a90': {
    '--rose': '#b81a90',
    '--rose-light': '#fce8f6',
    '--rose-mid': '#d060b0',
    '--rose-dark': '#2e0020',
    '--rose-soft': '#f0b0de',
    '--text': '#1a0014',
    '--text-muted': '#4a0038',
    '--text-light': '#d060b0',
    '--border': '#f0b0de',
    '--bg': '#fef5fc',
    '--sage': '#d060b0',
    '--sage-light': '#f8d4ee',
  },
  '#70dada': {
    '--rose': '#70dada',
    '--rose-light': '#e8fafa',
    '--rose-mid': '#98e8e8',
    '--rose-dark': '#0a2e2e',
    '--rose-soft': '#c0f0f0',
    '--text': '#041818',
    '--text-muted': '#1a4a4a',
    '--text-light': '#50b8b8',
    '--border': '#c0f0f0',
    '--bg': '#f4fefe',
    '--sage': '#50b8b8',
    '--sage-light': '#d8f4f4',
  },
  '#fa71c6': {
    '--rose': '#fa71c6',
    '--rose-light': '#feeef9',
    '--rose-mid': '#fc98d8',
    '--rose-dark': '#2e0020',
    '--rose-soft': '#fcc8ec',
    '--text': '#1a0014',
    '--text-muted': '#4a0038',
    '--text-light': '#fc98d8',
    '--border': '#fcc8ec',
    '--bg': '#fef6fc',
    '--sage': '#fc98d8',
    '--sage-light': '#fee0f4',
  },
  '#c00000': {
    '--rose': '#c00000',
    '--rose-light': '#fce8e8',
    '--rose-mid': '#e04040',
    '--rose-dark': '#2e0000',
    '--rose-soft': '#f4b0b0',
    '--text': '#1a0000',
    '--text-muted': '#4a0000',
    '--text-light': '#e04040',
    '--border': '#f4b0b0',
    '--bg': '#fef7f7',
    '--sage': '#e04040',
    '--sage-light': '#f8d4d4',
  },
}

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/ambassador/login'); return }

      const { data: ambData } = await supabase
        .from('ambassadors')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (!ambData) { router.push('/ambassador/onboarding'); return }

      // Rediriger vers onboarding si c'est la première connexion
        if (ambData?.primary_color) {
        const palette = PALETTES[ambData.primary_color]
        if (palette) {
            Object.entries(palette).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value)
            })
        }
        }
      setAmbassador(ambData)

      const { data: clientData } = await supabase
        .from('profiles')
        .select('id, full_name')
        .eq('ambassador_id', ambData.id)
      setClients(clientData || [])

      const { data: apptData } = await supabase
        .from('appointments')
        .select('*')
        .eq('ambassador_id', ambData.id)
        .order('date', { ascending: true })
      setAppointments(apptData || [])

      const { data: fbData } = await supabase
        .from('feedbacks')
        .select('*')
        .eq('ambassador_id', ambData.id)
        .order('created_at', { ascending: false })
      setFeedbacks(fbData || [])

      setLoading(false)
    }
    fetchData()
  }, [])

  const sendFeedback = async () => {
    if (!newFeedback.trim() || !selectedClient) return
    await supabase.from('feedbacks').insert({
      ambassador_id: ambassador.id,
      client_id: selectedClient,
      sender_role: 'ambassador',
      message: newFeedback.trim(),
    })
    setNewFeedback('')
    const { data } = await supabase
      .from('feedbacks')
      .select('*')
      .eq('ambassador_id', ambassador.id)
      .order('created_at', { ascending: false })
    setFeedbacks(data || [])
  }

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Chargement...</p>
    </div>
  )

  const accentColor = ambassador?.primary_color || '#8a7060'
  const features = ambassador?.features || {}

  const tabs = [
    { key: 'overview', label: 'Vue générale' },
    ...(features.rdv_physique || features.rdv_visio ? [{ key: 'rdv', label: 'RDV' }] : []),
    ...(features.feedbacks ? [{ key: 'feedbacks', label: 'Messages' }] : []),
    { key: 'settings', label: 'Réglages' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <div style={{
        background: 'white', borderBottom: '0.5px solid var(--border)',
        padding: '0 32px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '64px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {ambassador.logo_url ? (
            <img src={ambassador.logo_url} alt="logo" style={{ height: '32px', objectFit: 'contain' }} />
          ) : (
            <span style={{
              fontFamily: "var(--font-molle), serif", fontSize: '24px',
              color: 'var(--text)', fontWeight: '400',
            }}>
              Lin<span style={{ color: accentColor }}>i</span>eat
            </span>
          )}
          <span style={{
            fontSize: '12px', color: 'white', background: accentColor,
            padding: '3px 10px', borderRadius: '20px', fontWeight: '500',
          }}>
            Ambassadeur
          </span>
        </div>
        <button
          onClick={() => supabase.auth.signOut().then(() => router.push('/login'))}
          style={{
            background: 'none', border: '1px solid var(--border)',
            borderRadius: '20px', padding: '6px 16px',
            fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer',
          }}
        >
          Déconnexion
        </button>
      </div>

      {/* Tabs */}
      <div style={{
        background: 'white', borderBottom: '0.5px solid var(--border)',
        padding: '0 32px', display: 'flex',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: '16px 20px', background: 'none', border: 'none',
              borderBottom: activeTab === tab.key ? `2px solid ${accentColor}` : '2px solid transparent',
              fontSize: '13px', fontWeight: activeTab === tab.key ? '500' : '400',
              color: activeTab === tab.key ? accentColor : 'var(--text-muted)',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.15s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '32px', maxWidth: '900px', margin: '0 auto' }}>

        {/* Vue générale */}
        {activeTab === 'overview' && (
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif", fontSize: '24px',
              fontWeight: '400', marginBottom: '24px',
            }}>Vue générale</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'Clients', value: clients.length },
                { label: 'RDV à venir', value: appointments.filter(a => new Date(a.date) > new Date()).length },
                { label: 'Messages', value: feedbacks.length },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  background: 'white', borderRadius: '16px',
                  border: '0.5px solid var(--border)', padding: '24px',
                }}>
                  <div style={{ fontSize: '28px', fontWeight: '600', color: accentColor }}>{value}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'white', borderRadius: '16px',
              border: '0.5px solid var(--border)', padding: '24px',
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '16px' }}>
                Ton code partenaire client
              </h3>
              <div style={{
                background: 'var(--bg)', borderRadius: '12px', padding: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '2px', color: accentColor }}>
                  {ambassador.partner_code}
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(ambassador.partner_code)}
                  style={{
                    background: accentColor, color: 'white', border: 'none',
                    borderRadius: '20px', padding: '8px 16px', fontSize: '12px',
                    cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Copier
                </button>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
                Partage ce code à tes clients pour qu'ils accèdent à ton espace personnalisé.
              </p>
            </div>
          </div>
        )}

        {/* RDV */}
        {activeTab === 'rdv' && (
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif", fontSize: '24px',
              fontWeight: '400', marginBottom: '24px',
            }}>Rendez-vous</h2>

            {appointments.length === 0 ? (
              <div style={{
                background: 'white', borderRadius: '16px',
                border: '0.5px solid var(--border)', padding: '48px',
                textAlign: 'center', color: 'var(--text-muted)',
              }}>
                <p style={{ fontSize: '14px' }}>Aucun RDV pour l'instant</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {appointments.map(appt => (
                  <div key={appt.id} style={{
                    background: 'white', borderRadius: '16px',
                    border: '0.5px solid var(--border)', padding: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <div>
                      <span style={{
                        fontSize: '11px', fontWeight: '500', color: 'white',
                        background: appt.type === 'visio' ? '#2d5a8e' : accentColor,
                        padding: '3px 10px', borderRadius: '20px', marginRight: '10px',
                      }}>
                        {appt.type === 'visio' ? 'Visio' : 'Physique'}
                      </span>
                      <span style={{ fontSize: '14px', color: 'var(--text)' }}>
                        {new Date(appt.date).toLocaleDateString('fr-FR', {
                          weekday: 'long', day: 'numeric', month: 'long',
                          hour: '2-digit', minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '11px', padding: '4px 12px', borderRadius: '20px',
                      background: appt.status === 'confirmed' ? '#e8f5e9' : 'var(--bg)',
                      color: appt.status === 'confirmed' ? '#2e7d32' : 'var(--text-muted)',
                    }}>
                      {appt.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Feedbacks */}
        {activeTab === 'feedbacks' && (
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif", fontSize: '24px',
              fontWeight: '400', marginBottom: '24px',
            }}>Messages</h2>

            <div style={{ marginBottom: '20px' }}>
              <select
                value={selectedClient || ''}
                onChange={(e) => setSelectedClient(e.target.value)}
                style={{
                  padding: '12px 16px', borderRadius: '12px',
                  border: '1.5px solid var(--border)', fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif", background: 'white',
                  color: 'var(--text)', outline: 'none', width: '100%', maxWidth: '300px',
                }}
              >
                <option value="">Sélectionner un client</option>
                {clients.map(c => (
                  <option key={c.id} value={c.id}>{c.full_name || c.id.slice(0, 8)}</option>
                ))}
              </select>
            </div>

            <div style={{
              background: 'white', borderRadius: '16px',
              border: '0.5px solid var(--border)', padding: '20px',
              minHeight: '300px', maxHeight: '400px', overflowY: 'auto',
              display: 'flex', flexDirection: 'column', gap: '12px',
              marginBottom: '16px',
            }}>
              {feedbacks
                .filter(f => !selectedClient || f.client_id === selectedClient)
                .map(fb => (
                  <div key={fb.id} style={{
                    display: 'flex',
                    justifyContent: fb.sender_role === 'ambassador' ? 'flex-end' : 'flex-start',
                  }}>
                    <div style={{
                      maxWidth: '70%', padding: '12px 16px', borderRadius: '16px',
                      background: fb.sender_role === 'ambassador' ? accentColor : 'var(--bg)',
                      color: fb.sender_role === 'ambassador' ? 'white' : 'var(--text)',
                      fontSize: '13px', lineHeight: '1.5',
                    }}>
                      {fb.message}
                      <div style={{
                        fontSize: '10px', opacity: '0.7', marginTop: '4px',
                        textAlign: fb.sender_role === 'ambassador' ? 'right' : 'left',
                      }}>
                        {new Date(fb.created_at).toLocaleDateString('fr-FR', {
                          day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                placeholder="Ton message..."
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendFeedback()}
                style={{
                  flex: 1, padding: '13px 16px',
                  border: '1.5px solid var(--border)', borderRadius: '12px',
                  fontSize: '14px', fontFamily: "'DM Sans', sans-serif",
                  background: 'white', color: 'var(--text)', outline: 'none',
                }}
              />
              <button
                onClick={sendFeedback}
                disabled={!newFeedback.trim() || !selectedClient}
                style={{
                  padding: '13px 24px', borderRadius: '12px', border: 'none',
                  background: !newFeedback.trim() || !selectedClient ? 'var(--border)' : accentColor,
                  color: !newFeedback.trim() || !selectedClient ? 'var(--text-muted)' : 'white',
                  fontSize: '14px', cursor: !newFeedback.trim() || !selectedClient ? 'not-allowed' : 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Réglages */}
        {activeTab === 'settings' && (
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif", fontSize: '24px',
              fontWeight: '400', marginBottom: '24px',
            }}>Réglages</h2>
            <div style={{
              background: 'white', borderRadius: '16px',
              border: '0.5px solid var(--border)', padding: '24px',
            }}>
              <button
                onClick={() => router.push('/ambassador/onboarding')}
                style={{
                  padding: '12px 24px', borderRadius: '30px',
                  border: `1.5px solid ${accentColor}`, background: 'white',
                  color: accentColor, fontSize: '13px', fontWeight: '500',
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Modifier mes fonctionnalités & couleurs
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default function Page() {
  return (
    <AuthGuard requireAmbassador={true}>
      <AmbassadorDashboard />
    </AuthGuard>
  )
}