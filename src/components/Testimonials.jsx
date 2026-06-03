const testimonials = [
  { text: "J'ai perdu 4 kg en 2 mois sans me priver une seule fois. Les recettes sont vraiment bonnes.", name: 'Mathis, 24 ans', goal: 'Objectif : mince et tonique', initial: 'M' },
  { text: "Enfin une appli qui comprend que je veux manger du bon food ET progresser. Le planning m'a changé la vie.", name: 'Léa, 22 ans', goal: 'Objectif : fit et athlétique', initial: 'L' },
  { text: "Je fais de la muscu depuis 2 ans et je cherchais des recettes qui respectent mes macros. Linieat c'est exactement ça.", name: 'Thomas, 26 ans', goal: 'Objectif : hypertrophie', initial: 'T' },
]

function Testimonials() {
  return (
    <section style={{ marginBottom: '16px' }}>
      <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '10px' }}>
        Témoignages
      </p>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '26px', color: 'var(--text)', marginBottom: '20px' }}>
        Ce qu'ils en disent
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: 'white',
            border: '0.5px solid var(--border)',
            borderRadius: '20px',
            padding: '24px 22px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-8px', left: '16px',
              fontFamily: "'DM Serif Display', serif",
              fontSize: '80px', color: 'var(--rose-soft)',
              lineHeight: '1', pointerEvents: 'none',
            }}>
              "
            </div>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
              {[...Array(5)].map((_, j) => (
                <span key={j} style={{ color: 'var(--rose)', fontSize: '12px' }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text)', lineHeight: '1.7', marginBottom: '16px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
              {t.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--rose-soft)', color: 'var(--rose)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: '500',
              }}>
                {t.initial}
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text)' }}>{t.name}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '300' }}>{t.goal}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials