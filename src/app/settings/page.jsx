// app/settings/page.jsx
'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

const LABEL_MAP = {
  genre:          { label: 'Genre',           format: v => ({ femme: 'Femme', homme: 'Homme', autre: 'Autre' }[v] || v) },
  age:            { label: 'Âge',             format: v => `${v} ans` },
  poids:          { label: 'Poids',           format: v => `${v} kg` },
  taille:         { label: 'Taille',          format: v => `${v} cm` },
  objectif:       { label: 'Objectif',        format: v => ({ perte: 'Perdre du poids', muscu: 'Prendre du muscle', fit: 'Être plus fit', maintien: 'Maintenir mon poids', sante: 'Manger mieux', cardio: 'Performance sportive' }[v] || v) },
  sport:          { label: 'Fréquence sport', format: v => ({ sedentaire: 'Jamais ou presque', leger: '1–2 fois/semaine', modere: '3–4 fois/semaine', actif: '5–6 fois/semaine', 'tres-actif': 'Tous les jours' }[v] || v) },
  cardio_pct:     { label: 'Type de sport',   format: v => ({ muscu: 'Musculation', mix: 'Mix muscu + cardio', cardio: 'Cardio', autre: 'Sport collectif / autre' }[v] || v) },
  pas:            { label: 'Pas par jour',    format: v => ({ 'tres-bas': '< 5 000 pas', bas: '5 000–7 500 pas', moyen: '7 500–10 000 pas', actif: '10 000–12 500 pas', 'tres-actif': '> 12 500 pas' }[v] || v) },
  petit_dej:      { label: 'Petit-déjeuner',  format: v => ({ oui: 'Oui, tous les matins', parfois: 'Parfois', non: 'Non' }[v] || v) },
  petit_dej_type: { label: 'Type petit-déj',  format: v => ({ sucre: 'Sucré', sale: 'Salé', mixte: 'Les deux' }[v] || v) },
  gouter:         { label: 'Goûter',          format: v => ({ oui: 'Oui', parfois: 'Parfois', non: 'Non' }[v] || v) },
  gouter_type:    { label: 'Type goûter',     format: v => ({ sucre: 'Sucré', sale: 'Salé', mixte: 'Les deux' }[v] || v) },
  regime:         { label: 'Régime',          format: v => ({ aucun: 'Aucun', vegetarien: 'Végétarien', vegan: 'Vegan', 'sans-gluten': 'Sans gluten', 'sans-lactose': 'Sans lactose', halal: 'Halal' }[v] || v) },
  budget:         { label: 'Budget courses',  format: v => ({ low: '< 30€/semaine', medium: '30–60€', high: '60–100€', unlimited: 'Pas de limite' }[v] || v) },
  temps_cuisine:  { label: 'Temps cuisine',   format: v => ({ express: '< 15 min', rapide: '15–30 min', normal: '30–60 min', long: 'J\'aime cuisiner longtemps' }[v] || v) },
  batch_cooking:  { label: 'Batch cooking',   format: v => ({ oui: 'Oui', parfois: 'Parfois', non: 'Non' }[v] || v) },
  personnes:      { label: 'Personnes',       format: v => v === 1 ? 'Juste moi' : `${v} personnes` },
}

export default function SettingsPage() {
  const router = useRouter()
  const [quiz, setQuiz] = useState(null)
  const [email, setEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [emailMsg, setEmailMsg] = useState('')
  const [loading, setLoading] = useState(true)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/login'); return }
      setEmail(session.user.email || '')

      const { data } = await supabase
        .from('user_quiz_results')
        .select('*')
        .eq('user_id', session.user.id)
        .single()
      setQuiz(data)
      setLoading(false)
    }
    load()
  }, [])

  const handleResetQuiz = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return
    await supabase.from('user_quiz_results').delete().eq('user_id', session.user.id)
    await supabase.from('user_planning').delete().eq('user_id', session.user.id)
    router.push('/quiz?reset=true')
  }

  const handleEmailChange = async () => {
    setEmailMsg('')
    const { error } = await supabase.auth.updateUser({ email: newEmail })
    if (error) setEmailMsg('Erreur : ' + error.message)
    else setEmailMsg('Un email de confirmation a été envoyé à ' + newEmail)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleDeleteAccount = async () => {
    setDeleting(true)
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return

    const res = await fetch('/api/delete-account', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: session.user.id }),
    })

    if (!res.ok) {
      setDeleting(false)
      setDeleteConfirm(false)
      return
    }

    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Chargement...</p>
    </div>
  )

  const card = (children) => (
    <div style={{
      background: 'white', borderRadius: '20px',
      border: '0.5px solid var(--border)', padding: '24px',
      marginBottom: '16px',
    }}>
      {children}
    </div>
  )

  const sectionTitle = (title) => (
    <p style={{
      fontSize: '11px', fontWeight: '500', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--rose)',
      margin: '0 0 16px',
    }}>
      {title}
    </p>
  )

  const row = (label, value) => (
    <div key={label} style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 0', borderBottom: '0.5px solid var(--border)',
    }}>
      <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '500' }}>{value}</span>
    </div>
  )

  const btn = (label, onClick, variant = 'default') => {
    const styles = {
      default: { background: 'white', border: '0.5px solid var(--border)', color: 'var(--text)' },
      primary: { background: 'var(--rose)', border: 'none', color: 'white' },
      danger:  { background: 'white', border: '1px solid #e53e3e', color: '#e53e3e' },
    }
    return (
      <button onClick={onClick} style={{
        ...styles[variant],
        padding: '11px 20px', borderRadius: '30px',
        fontSize: '13px', fontWeight: '500', cursor: 'pointer',
        fontFamily: "'DM Sans', sans-serif", transition: 'all 0.15s',
      }}>
        {label}
      </button>
    )
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 0 80px' }}>

      <button
        onClick={() => router.push('/')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '13px', color: 'var(--text-muted)',
          fontFamily: "'DM Sans', sans-serif",
          padding: '0', marginBottom: '24px',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}
      >
        ← Retour
      </button>

      <h1 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: '28px', color: 'var(--text)',
        fontWeight: '400', margin: '0 0 32px',
      }}>
        Réglages
      </h1>

      {/* ── COMPTE ─────────────────────────────────────────────── */}
      {card(<>
        {sectionTitle('Compte')}
        {row('Email actuel', email)}
        <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="email"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            placeholder="Nouvel email"
            style={{
              flex: 1, minWidth: '200px', padding: '11px 16px',
              border: '0.5px solid var(--border)', borderRadius: '12px',
              fontSize: '13px', fontFamily: "'DM Sans', sans-serif",
              color: 'var(--text)', outline: 'none', background: 'var(--bg)',
            }}
          />
          {btn('Modifier', handleEmailChange, 'primary')}
        </div>
        {emailMsg && (
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
            {emailMsg}
          </p>
        )}
      </>)}

      {/* ── MES RÉPONSES AU QUIZ ────────────────────────────────── */}
      {quiz && card(<>
        {sectionTitle('Mes réponses au quiz')}
        <div style={{ marginBottom: '16px' }}>
          {Object.entries(LABEL_MAP).map(([key, { label, format }]) => {
            const val = quiz[key]
            if (val === null || val === undefined || val === '') return null
            if (Array.isArray(val) && val.length === 0) return null
            return row(label, Array.isArray(val) ? val.join(', ') : format(val))
          })}
        </div>
        {btn('Refaire le quiz', handleResetQuiz)}
      </>)}

      {!quiz && card(<>
        {sectionTitle('Quiz')}
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Tu n'as pas encore fait le quiz.
        </p>
        {btn('Faire le quiz', () => router.push('/quiz'), 'primary')}
      </>)}

      {/* ── SESSION ─────────────────────────────────────────────── */}
      {card(<>
        {sectionTitle('Session')}
        {btn('Se déconnecter', handleLogout)}
      </>)}

      {/* ── ZONE DANGER ─────────────────────────────────────────── */}
      {card(<>
        {sectionTitle('Zone dangereuse')}
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          La suppression de ton compte est définitive. Toutes tes données seront effacées.
        </p>
        {!deleteConfirm
          ? btn('Supprimer mon compte', () => setDeleteConfirm(true), 'danger')
          : (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '13px', color: '#e53e3e', margin: 0 }}>
                Tu es sûr ? Cette action est irréversible.
              </p>
              <button
                onClick={handleDeleteAccount}
                disabled={deleting}
                style={{
                  padding: '11px 20px', borderRadius: '30px',
                  background: '#e53e3e', border: 'none', color: 'white',
                  fontSize: '13px', fontWeight: '500', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {deleting ? 'Suppression...' : 'Oui, supprimer'}
              </button>
              {btn('Annuler', () => setDeleteConfirm(false))}
            </div>
          )
        }
      </>)}

    </div>
  )
}