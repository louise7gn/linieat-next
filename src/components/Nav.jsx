// components/Nav.jsx
'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabaseClient'

export default function Nav() {
  const path = usePathname()
  const router = useRouter()
  const [session, setSession] = useState(undefined)
  const [quizDone, setQuizDone] = useState(false)

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      if (session) {
        const { data } = await supabase
          .from('user_quiz_results')
          .select('user_id')
          .eq('user_id', session.user.id)
          .single()
        setQuizDone(!!data)
      }
    }
    init()

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      if (session) {
        const { data } = await supabase
          .from('user_quiz_results')
          .select('user_id')
          .eq('user_id', session.user.id)
          .single()
        setQuizDone(!!data)
      } else {
        setQuizDone(false)
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const links = [
    { href: '/recettes', label: 'Recettes' },
    { href: '/macros', label: 'Besoins nutritifs' },
    { href: '/physique', label: 'Objectifs physiques' },
    { href: '/organisation', label: 'Organisation' },
    { href: '/science', label: 'Science' },
  ]

  const handleProtectedClick = (e, href) => {
    if (!session) {
      e.preventDefault()
      router.push('/login')
    }
  }

  return (
    <nav style={{
      width: '100%', maxWidth: '900px', margin: '16px auto',
      background: 'white', borderRadius: '18px',
      border: '0.5px solid var(--border)',
      padding: '0 20px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      height: '56px',
    }}>
      <Link href="/" style={{
        fontFamily: "var(--font-molle), serif",
        fontSize: '20px', color: 'var(--text)',
        textDecoration: 'none', fontWeight: '400',
      }}>
        Lin<span style={{ color: 'var(--rose)' }}>i</span>eat
      </Link>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={(e) => handleProtectedClick(e, l.href)}
            style={{
              fontSize: '13px',
              color: path === l.href ? 'var(--rose)' : 'var(--text)',
              textDecoration: 'none',
              fontWeight: path === l.href ? '500' : '400',
            }}
          >
            {l.label}
          </Link>
        ))}

        {!quizDone && (
          <Link href="/quiz" style={{
            background: 'var(--rose)', color: 'white',
            padding: '8px 16px', borderRadius: '20px',
            fontSize: '12px', fontWeight: '500',
            textDecoration: 'none',
          }}>
            Commencer
          </Link>
        )}

        {session && (
          <Link
            href="/settings"
            title="Réglages"
            style={{
              width: '34px', height: '34px',
              borderRadius: '50%',
              border: '0.5px solid var(--border)',
              background: path === '/settings' ? 'var(--rose-light)' : 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', flexShrink: 0,
              transition: 'all 0.15s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={path === '/settings' ? 'var(--rose)' : 'var(--text-muted)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </Link>
        )}
      </div>
    </nav>
  )
}