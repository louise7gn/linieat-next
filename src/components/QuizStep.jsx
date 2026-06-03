'use client'
import FoodInput from './FoodInput'

export default function QuizStep({ step, value, onChange }) {
  if (step.type === 'choice') {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: step.choices.length <= 3 ? '1fr' : 'repeat(2, 1fr)',
        gap: '10px',
      }}>
        {step.choices.map(choice => (
          <button
            key={choice.value}
            onClick={() => onChange(choice.value)}
            style={{
              padding: '14px 20px',
              borderRadius: '14px',
              border: `2px solid ${value === choice.value ? 'var(--rose)' : 'var(--border)'}`,
              background: value === choice.value ? 'var(--rose-light)' : 'white',
              color: value === choice.value ? 'var(--rose)' : 'var(--text)',
              fontSize: '13px', fontWeight: value === choice.value ? '500' : '400',
              cursor: 'pointer', textAlign: 'left',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.15s',
            }}
          >
            {choice.label}
          </button>
        ))}
      </div>
    )
  }

  if (step.type === 'number') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <input
          type="number"
          value={value || ''}
          onChange={e => onChange(Number(e.target.value))}
          placeholder={step.placeholder}
          min={step.min}
          max={step.max}
          style={{
            width: '160px', padding: '14px 18px',
            border: `2px solid ${value ? 'var(--rose)' : 'var(--border)'}`,
            borderRadius: '14px', fontSize: '20px', fontWeight: '500',
            fontFamily: "'DM Sans', sans-serif", outline: 'none',
            color: 'var(--text)', background: 'white',
            textAlign: 'center',
          }}
        />
        {step.unit && (
          <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: '500' }}>
            {step.unit}
          </span>
        )}
      </div>
    )
  }

  if (step.type === 'food-input') {
    return (
      <FoodInput
        value={value || []}
        onChange={onChange}
        type={step.foodType}
      />
    )
  }

  return null
}