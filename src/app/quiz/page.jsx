'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthGuard from '@/components/AuthGuard'
import Quiz from '@/components/Quiz'
import { QuizProvider } from '@/context/QuizContext'
import { supabase } from '@/utils/supabaseClient'

function QuizGate() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkQuizDone = async () => {
      // Lit l'URL directement — pas de Suspense, pas de timing issue
      const params = new URLSearchParams(window.location.search)
      if (params.get('reset') === 'true') {
        setChecking(false)
        return
      }

      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { setChecking(false); return }

      const { data } = await supabase
        .from('user_quiz_results')
        .select('user_id')
        .eq('user_id', session.user.id)
        .single()

      if (data) router.replace('/')
      else setChecking(false)
    }
    checkQuizDone()
  }, [router])

  if (checking) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Chargement...</p>
      </div>
    )
  }

  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  )
}

export default function QuizPage() {
  return (
    <AuthGuard>
      <QuizGate />
    </AuthGuard>
  )
}