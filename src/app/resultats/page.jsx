import AuthGuard from '@/components/AuthGuard'
import Resultats from '@/components/Resultats'
import { QuizProvider } from '@/context/QuizContext'

export default function ResultatsPage() {
  return (
    <AuthGuard>
      <QuizProvider>
        <Resultats />
      </QuizProvider>
    </AuthGuard>
  )
}