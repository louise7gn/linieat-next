'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabaseClient'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleCallback = async () => {
      const params     = new URLSearchParams(window.location.search)
      const token_hash = params.get('token_hash')
      const type       = params.get('type')
      const partner    = params.get('partner')
      const next       = partner ? `/quiz?partner=${partner}` : '/quiz'

      if (token_hash && type) {
        const { error } = await supabase.auth.verifyOtp({ token_hash, type })
        if (!error) { router.push(next); return }
      }

      router.push('/login?error=lien_invalide')
    }

    handleCallback()
  }, [router])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Connexion en cours...</p>
    </div>
  )
}