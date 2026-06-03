'use client'

export default function QuizProgress({ current, total }) {
  const pct = Math.round((current / total) * 100)

  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: '8px',
      }}>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '500' }}>
          Question {current} sur {total}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--rose)', fontWeight: '500' }}>
          {pct}%
        </span>
      </div>
      <div style={{
        width: '100%', height: '4px',
        background: 'var(--border)', borderRadius: '4px', overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`, height: '100%',
          background: 'var(--rose)', borderRadius: '4px',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  )
}