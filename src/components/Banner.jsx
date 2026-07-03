'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function Banner() {
  const router = useRouter()
  const [ambassadorLogo, setAmbassadorLogo] = useState(null)
  const [ambassadorName, setAmbassadorName] = useState(null)
  const [quizDone, setQuizDone] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: quizResult } = await supabase
        .from('user_quiz_results')
        .select('user_id')
        .eq('user_id', user.id)
        .single()
      setQuizDone(!!quizResult)

      const { data: profile } = await supabase
        .from('profiles')
        .select('ambassador_id')
        .eq('id', user.id)
        .single()

      if (!profile?.ambassador_id) return

      const { data: amb } = await supabase
        .from('ambassadors')
        .select('logo_url, name')
        .eq('id', profile.ambassador_id)
        .single()

      if (amb?.logo_url) setAmbassadorLogo(amb.logo_url)
      if (amb?.name) setAmbassadorName(amb.name)
    }
    fetchData()
  }, [])

  return (
    <section style={{
      width: '100%',
      background: 'var(--white)',
      borderRadius: '24px',
      border: '0.5px solid var(--border)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '300px',
      marginBottom: '16px',
    }}>
      <div style={{
        padding: '52px 48px',
        paddingTop: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--rose)',
          fontWeight: '500',
          marginBottom: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--rose-mid)', display: 'inline-block' }} />
          Mange ce que tu veux.<br />Atteins ce que tu veux.
        </div>

        {ambassadorLogo ? (
          <div style={{ marginBottom: '10px' }}>
            <img
              src={ambassadorLogo}
              alt={ambassadorName || 'logo'}
              style={{ height: '72px', objectFit: 'contain', display: 'block' }}
            />
          </div>
        ) : (
          <h1 style={{
            fontFamily: "var(--font-molle), serif",
            fontWeight: '400',
            fontSize: '88px',
            color: 'var(--text)',
            letterSpacing: '-2px',
            lineHeight: '1',
            marginBottom: '10px',
          }}>
            Lin<span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>i</span>eat
          </h1>
        )}

        <div style={{ marginBottom: '16px' }}>
          <strong style={{
            color: 'var(--rose)',
            fontWeight: '500',
            fontSize: '20px',
            display: 'block',
            marginBottom: '4px',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Régale-toi. Progresse. Recommence.
          </strong>
          <span style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            fontWeight: '300',
            lineHeight: '1.6',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Ton corps, tes règles. Linieat calcule tout pour que tu n'aies qu'à cuisiner.
          </span>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {quizDone ? (
            <button
              onClick={() => router.push('/organisation')}
              style={{
                background: 'var(--rose)', color: 'white', border: 'none',
                borderRadius: '30px', padding: '14px 28px', fontSize: '14px',
                fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>
              Voir mon planning
            </button>
          ) : (
            <button
              onClick={() => router.push('/login')}
              style={{
                background: 'var(--rose)', color: 'white', border: 'none',
                borderRadius: '30px', padding: '14px 28px', fontSize: '14px',
                fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>
              Créer mon profil
            </button>
          )}
          <button
            onClick={() => router.push('/recettes')}
            style={{
              background: 'white', color: 'var(--text)',
              border: '0.5px solid var(--border)', borderRadius: '30px',
              padding: '14px 28px', fontSize: '14px',
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            }}>
            Voir les recettes
          </button>
        </div>

        <div style={{
          position: 'absolute', top: '28px', left: '48px',
          borderRadius: '12px', fontSize: '9px', fontWeight: '500',
          padding: '5px 10px', letterSpacing: '0.5px', textTransform: 'uppercase',
          background: 'var(--rose-light)', color: 'var(--rose)',
        }}>
          Aucune restriction. Juste des résultats.
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{
          content: '', position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #ffffff 0%, transparent 30%)', zIndex: 1,
        }} />
        <img
          src="/images/banniere.png"
          alt="Linieat recettes"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', display: 'block' }}
        />
      </div>
    </section>
  )
}