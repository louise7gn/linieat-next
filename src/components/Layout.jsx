import Nav from './Nav'
import Footer from './Footer'
import { QuizProvider } from '../context/QuizContext'
import { PlanningProvider } from '../context/PlanningContext'

export default function Layout({ children }) {
  return (
    <QuizProvider>
      <PlanningProvider>
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', minHeight: '100vh', padding: '0 16px',
        }}>
          <Nav />
          <main style={{ width: '100%', maxWidth: '900px' }}>
            {children}
          </main>
          <Footer />
        </div>
      </PlanningProvider>
    </QuizProvider>
  )
}