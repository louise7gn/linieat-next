export default function MiniFeatures() {
  const items = [
    {
      label: 'Planning', val: 'Repas qui te ressemblent', bg: 'var(--rose-light)',
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="#C8780A" strokeWidth="1.5" strokeLinecap="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
    },
    {
      label: 'Objectifs', val: "On t'emmène là-bas", bg: 'var(--sage-light)',
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="#C8780A" strokeWidth="1.5" strokeLinecap="round"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
    },
    {
      label: 'Courses', val: 'Zéro prise de tête', bg: '#FDEEE8',
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="#E8A088" strokeWidth="1.5" strokeLinecap="round"><path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>
    },
    {
      label: 'Fraîcheur', val: 'Rien ne se perd', bg: '#FEF6D8',
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="#F0B030" strokeWidth="1.5" strokeLinecap="round"><path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>
    },
  ]

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          background: 'white', borderRadius: '16px', padding: '18px 20px',
          display: 'flex', alignItems: 'center', gap: '12px',
          border: '0.5px solid var(--border)',
        }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '11px',
            background: item.bg, display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexShrink: 0,
          }}>
            <svg style={{ width: '16px', height: '16px' }} viewBox={item.svg.props.viewBox} fill="none" stroke={item.svg.props.stroke} strokeWidth="1.5" strokeLinecap="round">
              {item.svg.props.children}
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '500' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text)', marginTop: '2px' }}>
              {item.val}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}