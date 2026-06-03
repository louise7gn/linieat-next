const steps = [
  { num: '1', title: 'Tu réponds au quiz', sub: 'Tes goûts, ton corps, tes objectifs. 5 min max.' },
  { num: '2', title: 'On calcule tes macros', sub: 'Protéines, glucides, lipides. Précis et adapté.' },
  { num: '3', title: 'On sélectionne tes recettes', sub: 'Parmi 40+ recettes, la version parfaite pour toi.' },
  { num: '4', title: 'Tu planifies. Tu régales.', sub: 'Planning semaine + liste de courses générée.' },
]

function HowItWorks() {
  return (
    <section style={{ marginBottom: '16px' }}>
      <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '10px' }}>
        Comment ça marche
      </p>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: 'var(--text)', marginBottom: '6px' }}>
        4 étapes. 5 minutes.<br />Un planning fait pour toi.
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300', marginBottom: '24px' }}>
        Pas de prise de tête. Tu réponds, on calcule, tu manges.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            background: 'white',
            border: '0.5px solid var(--border)',
            borderRadius: '16px',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '10px',
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'var(--rose)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'DM Serif Display', serif", fontSize: '18px',
            }}>
              {step.num}
            </div>
            <div style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text)' }}>{step.title}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '300', lineHeight: '1.6' }}>{step.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks