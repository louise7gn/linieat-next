export default function FeatureCards() {
  const features = [
    {
      bg: 'var(--rose-light)', stroke: '#C8780A',
      title: 'Ton planning. Tes règles.',
      desc: 'Organisé selon ta vie — pas selon un régime inventé',
      svg: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    },
    {
      bg: 'var(--sage-light)', stroke: '#C8780A',
      title: 'Pas de privation. Que de la progression.',
      desc: 'Tes goûts, ton corps, ton objectif — tout dans le calcul',
      svg: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    },
    {
      bg: '#F2EEF8', stroke: '#C8780A',
      title: 'Des recettes qui claquent et qui performent.',
      desc: "Café, matcha, gâteaux... healthy n'a rien à voir avec fade",
      svg: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    },
    {
      bg: '#FEF6D8', stroke: '#F0B030',
      title: 'Une semaine blindée. Zéro excuses.',
      desc: 'Prépare une fois, mange bien toute la semaine — même quand le temps manque',
      svg: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-1.5',
    },
  ]

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
      {features.map((f, i) => (
        <div key={i} style={{
          background: 'white', borderRadius: '16px', padding: '20px 18px',
          border: '0.5px solid var(--border)',
        }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '9px',
            background: f.bg, display: 'flex', alignItems: 'center',
            justifyContent: 'center', marginBottom: '10px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={f.stroke} strokeWidth="1.5" strokeLinecap="round">
              <path d={f.svg} />
            </svg>
          </div>
          <div style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text)', marginBottom: '4px' }}>
            {f.title}
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '300', lineHeight: '1.5' }}>
            {f.desc}
          </div>
        </div>
      ))}
    </section>
  )
}