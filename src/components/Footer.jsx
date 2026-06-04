export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      textAlign: 'center',
      padding: '20px 20px 32px',
      fontSize: '11px',
      color: 'var(--text-light)',
      fontFamily: "'DM Sans', sans-serif",
      borderTop: '0.5px solid var(--border)',
      marginTop: '20px',
    }}>
      <a href="mailto:linieat.contact@gmail.com" style={{ color: 'var(--rose)', textDecoration: 'none' }}>
        linieat.contact@gmail.com
      </a>
    </footer>
  )
}