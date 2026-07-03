'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

const COLORS = [
  { label: 'Marine', value: '#4d8fda' },
  { label: 'Turquoise', value: '#70dada' },
  { label: 'Violet', value: '#b81a90' },
  { label: 'Rose', value: '#fa71c6' },
  { label: 'Rouge', value: '#c00000' },
  { label: 'Orange', value: '#ff6b16' },
  { label: 'Jaune', value: '#fca400' },
  { label: 'Vert', value: '#7fc77f' },
  { label: 'Brun', value: '#815f4a' },
]

const PALETTES = {
  '#815f4a': { '--rose': '#815f4a', '--rose-light': '#f2ebe6', '--rose-mid': '#a07860', '--rose-dark': '#2e1a0e', '--rose-soft': '#d4b8a8', '--text': '#1a0e08', '--text-muted': '#4a2e1a', '--text-light': '#a07860', '--border': '#d4b8a8', '--bg': '#faf6f3', '--sage': '#a07860', '--sage-light': '#e8d8cc' },
  '#ff6b16': { '--rose': '#ff6b16', '--rose-light': '#fff0e8', '--rose-mid': '#ff9a5c', '--rose-dark': '#2e1000', '--rose-soft': '#ffd0b0', '--text': '#1a0800', '--text-muted': '#4a1e00', '--text-light': '#ff9a5c', '--border': '#ffd0b0', '--bg': '#fffaf7', '--sage': '#ff9a5c', '--sage-light': '#ffe8d4' },
  '#7fc77f': { '--rose': '#7fc77f', '--rose-light': '#eef7ee', '--rose-mid': '#a0d4a0', '--rose-dark': '#0e2e0e', '--rose-soft': '#c8e8c8', '--text': '#081a08', '--text-muted': '#1a4a1a', '--text-light': '#5a9e5a', '--border': '#c8e8c8', '--bg': '#f7fbf7', '--sage': '#5a9e5a', '--sage-light': '#daf0da' },
  '#4d8fda': { '--rose': '#4d8fda', '--rose-light': '#e8f2fc', '--rose-mid': '#7aaeea', '--rose-dark': '#0a1e3a', '--rose-soft': '#b8d4f4', '--text': '#061020', '--text-muted': '#1a3a5a', '--text-light': '#7aaeea', '--border': '#b8d4f4', '--bg': '#f5f9fe', '--sage': '#7aaeea', '--sage-light': '#d4e8f8' },
  '#b81a90': { '--rose': '#b81a90', '--rose-light': '#fce8f6', '--rose-mid': '#d060b0', '--rose-dark': '#2e0020', '--rose-soft': '#f0b0de', '--text': '#1a0014', '--text-muted': '#4a0038', '--text-light': '#d060b0', '--border': '#f0b0de', '--bg': '#fef5fc', '--sage': '#d060b0', '--sage-light': '#f8d4ee' },
  '#fca400': { '--rose': '#fca400', '--rose-light': '#fff3d7', '--rose-mid': '#F0B030', '--rose-dark': '#271706', '--rose-soft': '#ffe578', '--text': '#1A0E00', '--text-muted': '#4A2800', '--text-light': '#C8A050', '--border': '#ffe578', '--bg': '#fffaf1', '--sage': '#F0B030', '--sage-light': '#FAE8B0' },
  '#70dada': { '--rose': '#70dada', '--rose-light': '#e8fafa', '--rose-mid': '#98e8e8', '--rose-dark': '#0a2e2e', '--rose-soft': '#c0f0f0', '--text': '#041818', '--text-muted': '#1a4a4a', '--text-light': '#50b8b8', '--border': '#c0f0f0', '--bg': '#f4fefe', '--sage': '#50b8b8', '--sage-light': '#d8f4f4' },
  '#fa71c6': { '--rose': '#fa71c6', '--rose-light': '#feeef9', '--rose-mid': '#fc98d8', '--rose-dark': '#2e0020', '--rose-soft': '#fcc8ec', '--text': '#1a0014', '--text-muted': '#4a0038', '--text-light': '#fc98d8', '--border': '#fcc8ec', '--bg': '#fef6fc', '--sage': '#fc98d8', '--sage-light': '#fee0f4' },
  '#c00000': { '--rose': '#c00000', '--rose-light': '#fce8e8', '--rose-mid': '#e04040', '--rose-dark': '#2e0000', '--rose-soft': '#f4b0b0', '--text': '#1a0000', '--text-muted': '#4a0000', '--text-light': '#e04040', '--border': '#f4b0b0', '--bg': '#fef7f7', '--sage': '#e04040', '--sage-light': '#f8d4d4' },
}

const applyPalette = (colorValue) => {
  const palette = PALETTES[colorValue]
  if (palette) Object.entries(palette).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
}

// PNG + JPEG uniquement
const ALLOWED_TYPES      = ['image/jpeg', 'image/png']
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png']
const MAX_SIZE_MB        = 2

export default function AmbassadorOnboarding() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [features, setFeatures] = useState({ rdv_physique: false, rdv_visio: false, feedbacks: false })
  const [color, setColor] = useState('#fca400')
  const [logoUrl, setLogoUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ambassadorId, setAmbassadorId] = useState(null)
  const [initLoading, setInitLoading] = useState(true)

  useEffect(() => {
    const fetchAmbassador = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/ambassador/login'); return }

      const { data } = await supabase
        .from('ambassadors')
        .select('id, features, primary_color, logo_url')
        .eq('user_id', user.id)
        .single()

      if (data) {
        setAmbassadorId(data.id)
        setFeatures(data.features || features)
        const savedColor = data.primary_color || '#fca400'
        setColor(savedColor)
        applyPalette(savedColor)
        setLogoUrl(data.logo_url || '')
      }
      setInitLoading(false)
    }
    fetchAmbassador()
  }, [])

  const handleColorChange = (value) => {
    setColor(value)
    applyPalette(value)
  }

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploadError('')
    setUploadSuccess(false)

    // ── 1. Type MIME ──────────────────────────────────────────────────────
    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError('Format non supporté. Utilise un PNG ou JPG.')
      e.target.value = ''
      return
    }

    // ── 2. Extension ──────────────────────────────────────────────────────
    const ext = file.name.split('.').pop().toLowerCase()
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setUploadError('Extension non supportée. Utilise .png ou .jpg.')
      e.target.value = ''
      return
    }

    // ── 3. Taille ─────────────────────────────────────────────────────────
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setUploadError(`Fichier trop lourd. Maximum ${MAX_SIZE_MB} Mo.`)
      e.target.value = ''
      return
    }

    // ── 4. Magic bytes — vérification du contenu réel ─────────────────────
    // PNG : 89 50 4E 47 | JPEG : FF D8 FF
    try {
      const buffer = await file.slice(0, 4).arrayBuffer()
      const bytes  = new Uint8Array(buffer)
      const isPNG  = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47
      const isJPEG = bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF

      if (!isPNG && !isJPEG) {
        setUploadError('Fichier invalide. Le contenu ne correspond pas à une image PNG ou JPG.')
        e.target.value = ''
        return
      }
    } catch {
      setUploadError('Impossible de lire le fichier. Réessaie.')
      e.target.value = ''
      return
    }

    // ── Upload Supabase Storage ───────────────────────────────────────────
    setUploading(true)
    const fileName = `logos/${ambassadorId}.${ext}`

    const { error } = await supabase.storage
      .from('ambassador-assets')
      .upload(fileName, file, { upsert: true, contentType: file.type })

    if (error) {
      setUploadError('Erreur lors de l\'import. Réessaie.')
    } else {
      const { data } = supabase.storage.from('ambassador-assets').getPublicUrl(fileName)
      setLogoUrl(data.publicUrl)
      setUploadSuccess(true)
    }
    setUploading(false)
  }

  const handleSave = async () => {
    setLoading(true)
    await supabase
      .from('ambassadors')
      .update({ features, primary_color: color, logo_url: logoUrl })
      .eq('id', ambassadorId)
    router.push('/ambassador/dashboard')
  }

  const toggleFeature = (key) => setFeatures(prev => ({ ...prev, [key]: !prev[key] }))

  if (initLoading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Chargement...</p>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif", padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Étape {step}/2</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: 'var(--text)', fontWeight: '400' }}>
            {step === 1 ? 'Choisis tes fonctionnalités' : 'Personnalise ton espace'}
          </h1>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', border: '0.5px solid var(--border)', padding: '32px' }}>

          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Quelles fonctionnalités veux-tu activer pour tes clients ?
              </p>
              {[
                { key: 'rdv_physique', label: 'Prise de RDV physique', desc: 'Tes clients réservent des créneaux en présentiel' },
                { key: 'rdv_visio', label: 'Prise de RDV en visio', desc: 'Tes clients réservent des créneaux en ligne' },
                { key: 'feedbacks', label: 'Feedbacks & échanges', desc: 'Messagerie directe entre toi et tes clients' },
              ].map(({ key, label, desc }) => (
                <div key={key} onClick={() => toggleFeature(key)} style={{ padding: '16px', borderRadius: '12px', cursor: 'pointer', border: `1.5px solid ${features[key] ? color : 'var(--border)'}`, background: features[key] ? `${color}10` : 'var(--bg)', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text)', margin: 0 }}>{label}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '2px 0 0' }}>{desc}</p>
                  </div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${features[key] ? color : 'var(--border)'}`, background: features[key] ? color : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {features[key] && <span style={{ color: 'white', fontSize: '11px' }}>✓</span>}
                  </div>
                </div>
              ))}
              <button onClick={() => setStep(2)} style={{ padding: '14px', borderRadius: '30px', border: 'none', background: 'var(--rose)', color: 'white', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", marginTop: '8px' }}>
                Suivant →
              </button>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <div>
                <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '12px' }}>Couleur principale</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {COLORS.map(({ label, value }) => (
                    <div key={value} onClick={() => handleColorChange(value)} title={label} style={{ width: '36px', height: '36px', borderRadius: '50%', background: value, cursor: 'pointer', border: color === value ? '3px solid var(--text)' : '3px solid transparent', transition: 'all 0.15s' }} />
                  ))}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
                  Aperçu : <span style={{ color, fontWeight: '500' }}>Linieat avec ta couleur</span>
                </p>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '12px' }}>
                  Logo <span style={{ fontWeight: '400', textTransform: 'none' }}>(optionnel)</span>
                </label>

                {logoUrl && (
                  <div style={{ marginBottom: '12px', padding: '12px', background: 'var(--bg)', borderRadius: '12px', display: 'inline-block' }}>
                    <img src={logoUrl} alt="logo" style={{ height: '48px', objectFit: 'contain', display: 'block' }} />
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <label style={{ display: 'inline-block', padding: '11px 20px', borderRadius: '12px', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: '13px', color: 'var(--text-muted)', cursor: uploading ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.15s' }}>
                    {uploading ? 'Envoi en cours...' : logoUrl ? 'Changer le logo' : 'Importer mon logo'}
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                      onChange={handleLogoUpload}
                      disabled={uploading}
                      style={{ display: 'none' }}
                    />
                  </label>

                  {logoUrl && (
                    <button onClick={() => { setLogoUrl(''); setUploadSuccess(false) }} style={{ background: 'none', border: 'none', fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", textDecoration: 'underline' }}>
                      Supprimer
                    </button>
                  )}
                </div>

                {uploadError && (
                  <p style={{ fontSize: '12px', color: '#e53e3e', marginTop: '8px' }}>{uploadError}</p>
                )}
                {uploadSuccess && (
                  <p style={{ fontSize: '12px', color: '#2e7d32', marginTop: '8px' }}>Logo importé avec succès.</p>
                )}
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px' }}>
                  PNG ou JPG · 2 Mo maximum. Privilégie un PNG fond transparent.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', borderRadius: '30px', border: '1px solid var(--border)', background: 'white', color: 'var(--text)', fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>← Retour</button>
                <button onClick={handleSave} disabled={loading || uploading} style={{ flex: 2, padding: '14px', borderRadius: '30px', border: 'none', background: loading || uploading ? 'var(--border)' : 'var(--rose)', color: loading || uploading ? 'var(--text-muted)' : 'white', fontSize: '14px', fontWeight: '500', cursor: loading || uploading ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  {loading ? 'Sauvegarde...' : 'Accéder à mon dashboard →'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}