'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function AuthGuard({ children, requireAmbassador = false }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session }, error }) => {
      if (error) { setError(true); setLoading(false); return }
      if (!session) {
        router.push(requireAmbassador ? '/ambassador/login' : '/login')
        return
      }

      // Vérification rôle ambassadeur
      if (requireAmbassador) {
        const { data } = await supabase
          .from('ambassadors')
          .select('id')
          .eq('user_id', session.user.id)
          .single()

        if (!data) {
          router.push('/ambassador/login')
          return
        }
      }

      // Lier le client à son ambassadeur — code dans l'URL ou localStorage
      const urlParams = new URLSearchParams(window.location.search)
      const pendingCode = urlParams.get('partner') || localStorage.getItem('pending_partner_code')

      if (pendingCode) {
        const { data: ambData } = await supabase
          .from('ambassadors')
          .select('id')
          .eq('partner_code', pendingCode)
          .single()

        if (ambData) {
          await supabase
            .from('profiles')
            .upsert({ id: session.user.id, ambassador_id: ambData.id })
        }
        localStorage.removeItem('pending_partner_code')
      }

      setLoading(false)
    })
  }, [router, requireAmbassador])

  if (error) return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '12px' }}>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Une erreur est survenue. Veuillez réessayer.</p>
      <button onClick={() => window.location.reload()} style={{
        background: 'var(--rose)', color: 'white', border: 'none',
        borderRadius: '30px', padding: '12px 24px', fontSize: '13px', cursor: 'pointer'
      }}>Réessayer</button>
    </div>
  )

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Chargement...</p>
    </div>
  )

  return children
}