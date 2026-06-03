import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
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
  )
}