const stats = [
  { num: '40+', label: 'Recettes gourmandes' },
  { num: '120', label: 'Versions de recettes' },
  { num: '100%', label: 'Personnalisé' },
  { num: '0', label: 'Privation' },
]

function StatsBar() {
  return (
    <section style={{
      background: '#1A0E00',
      borderRadius: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      marginBottom: '16px',
      overflow: 'hidden',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: '28px 20px',
          textAlign: 'center',
          borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.1)' : 'none',
        }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '36px', color: 'var(--rose-mid)', lineHeight: '1', marginBottom: '6px' }}>
            {s.num}
          </div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {s.label}
          </div>
        </div>
      ))}
    </section>
  )
}

export default StatsBar