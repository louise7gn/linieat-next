'use client'
import { usePlanning } from '../context/PlanningContext'
import { recipes } from '../data/recipes'
import { scaleRecipe } from '../data/scaleRecipe'
import { useState } from 'react'

const perishability = {
  'Poulet': 'red', 'Saumon': 'red', 'Thon': 'red',
  'Bœuf 5%': 'red', 'Bœuf 15%': 'red', 'Bœuf 20%': 'red', 'Bacon': 'red',
  'Oeufs': 'orange', 'Feta': 'orange', 'Cheddar': 'orange',
  'Mascarpone': 'orange', 'Mascarpone allégé': 'orange', 'Skyr': 'orange',
  'Avocat': 'orange', 'Tomate': 'orange', 'Tomates': 'orange',
  'Tomates concassées': 'orange', 'Poivron': 'orange', 'Courgette': 'orange',
  'Laitue': 'red', 'Myrtilles': 'red', 'Banane': 'orange',
  'Mangue': 'orange', 'Fruits frais': 'orange',
  'Lait entier': 'orange', 'Lait amande': 'green', 'Lait avoine': 'green', 'Lait coco': 'green',
  'Riz': 'green', 'Riz basmati': 'green', 'Riz japonais': 'green', 'Riz sushi': 'green',
  'Quinoa': 'green', 'Flocons avoine': 'green', 'Pain complet': 'orange', 'Pain brioche': 'orange',
  'Pois chiches': 'green', 'Edamame': 'orange',
  'Huile olive': 'green', 'Beurre cacahuète': 'green', 'Beurre amande': 'green',
  'Sauce soja': 'green', 'Miel': 'green', 'Chocolat noir': 'green',
  'Protéines vanille': 'green', 'Protéines': 'green',
  'Açaï': 'red', 'Granola': 'green', 'Granola coco': 'green',
  'Biscuits cuillère': 'green', 'Mascarpone allégé': 'orange',
}

const dotColor = { red: '#F44336', orange: '#FF9800', green: '#4CAF50' }
const dotLabel = { red: 'À utiliser vite', orange: 'Milieu de semaine', green: 'Se conserve bien' }

export default function ShoppingList() {
  const { planning, DAYS, MEALS, personnes, targetCalPerMeal } = usePlanning()
  const [checked, setChecked] = useState({})

  if (!planning) return null

  const allIngredients = {}

  DAYS.forEach(day => {
    MEALS.forEach(meal => {
      const slot = planning[day]?.[meal]
      if (!slot || !slot.liked) return
      const recipe = recipes.find(r => r.id === slot.recipeId)
      if (!recipe) return
      const version = recipe.versions[slot.versionIdx] || recipe.versions[1]
      const target = recipe.cat === 'sale' ? targetCalPerMeal : null
      const { ing } = scaleRecipe(version, target, personnes)

      ing.forEach(item => {
        if (item.role === 'condiment' || !item.qtyDisplay) return
        const key = item.name
        if (allIngredients[key]) {
          allIngredients[key].count++
        } else {
          allIngredients[key] = {
            qty: item.qtyDisplay,
            count: 1,
            perish: perishability[key] || 'green',
          }
        }
      })
    })
  })

  const sorted = Object.entries(allIngredients).sort((a, b) => {
    const order = { red: 0, orange: 1, green: 2 }
    return order[a[1].perish] - order[b[1].perish]
  })

  function toggle(name) {
    setChecked(prev => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div style={{
      background: 'white', borderRadius: '20px',
      border: '0.5px solid var(--border)', padding: '24px 28px',
      marginTop: '24px',
    }}>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: 'var(--text)', marginBottom: '6px' }}>
        Liste de courses
      </h2>
      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
        Basée sur les repas que tu as validés (✓). Quantités adaptées à ton profil.
      </p>

      {sorted.length === 0 ? (
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', padding: '20px 0' }}>
          Valide des repas dans ton planning pour générer ta liste de courses.
        </p>
      ) : (
        <>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {Object.entries(dotLabel).map(([key, label]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--text-muted)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColor[key], flexShrink: 0 }} />
                {label}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            {sorted.map(([name, info]) => (
              <div
                key={name}
                onClick={() => toggle(name)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '7px 4px', borderBottom: '0.5px solid var(--bg)',
                  cursor: 'pointer', opacity: checked[name] ? 0.4 : 1,
                  transition: 'opacity 0.15s',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColor[info.perish], flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: 'var(--text)', textDecoration: checked[name] ? 'line-through' : 'none', flex: 1 }}>
                  {name}
                </span>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                  {info.qty}{info.count > 1 ? ` ×${info.count}` : ''}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '16px', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>
            {Object.values(checked).filter(Boolean).length} / {sorted.length} articles cochés
          </div>
        </>
      )}
    </div>
  )
}