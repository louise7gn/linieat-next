'use client'
import { useRouter } from 'next/navigation'
import { useQuiz } from '../context/QuizContext'
import { calcMacros } from '../data/macroCalc'
import { recipes } from '../data/recipes'
import RecipeCard from './RecipeCard'
import { useState } from 'react'
import RecipeDetail from './RecipeDetail'

export default function Resultats() {
  const router = useRouter()
  const { data, completed } = useQuiz()
  const [selected, setSelected] = useState(null)

  if (!completed) {
    return (
      <div style={{ paddingTop: '60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '24px', color: 'var(--text)', marginBottom: '12px' }}>
          Tu n'as pas encore fait le quiz !
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
          Réponds aux questions pour voir tes recettes personnalisées.
        </p>
        <button onClick={() => router.push('/quiz')} style={{
          background: 'var(--rose)', color: 'white', border: 'none',
          borderRadius: '30px', padding: '14px 28px', fontSize: '14px',
          cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
        }}>
          Faire le quiz →
        </button>
      </div>
    )
  }

  const macros = calcMacros(data)

  // Filtrer les recettes selon régime et aliments évités
  const evites = data['aliments-evites'] || []
  const regime = data.regime || 'aucun'

  const recettesFiltered = recipes.filter(r => {
    if (regime === 'vegan' && !r.tags.includes('vegan')) return false
    return true
  }).slice(0, 9)

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>

      {/* Hero macros */}
      <div style={{
        background: 'white', borderRadius: '20px',
        border: '0.5px solid var(--border)',
        padding: '28px 32px', marginBottom: '24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--rose)', fontWeight: '500', marginBottom: '8px' }}>
          Tes résultats
        </div>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '28px', color: 'var(--text)', marginBottom: '6px' }}>
          Tes recettes sont prêtes.
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300', marginBottom: '20px' }}>
          On a calculé exactement ce qu'il te faut.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {[
            ['Calories', `${macros.calories}`, 'kcal/jour'],
            ['Protéines', `${macros.proteines}`, 'g/jour'],
            ['Glucides', `${macros.glucides}`, 'g/jour'],
            ['Lipides', `${macros.lipides}`, 'g/jour'],
          ].map(([label, val, unit]) => (
            <div key={label} style={{ background: 'var(--bg)', borderRadius: '12px', padding: '14px 10px' }}>
              <div style={{ fontSize: '22px', fontWeight: '500', color: 'var(--text)' }}>{val}</div>
              <div style={{ fontSize: '9px', color: 'var(--rose)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{unit}</div>
              <div style={{ fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recettes recommandées */}
      <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', color: 'var(--text)', marginBottom: '16px' }}>
        Tes recettes recommandées
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '40px' }}>
        {recettesFiltered.map(rec => (
          <RecipeCard key={rec.id} recipe={rec} onClick={() => setSelected(rec)} />
        ))}
      </div>

      {/* CTA planning */}
      <div style={{
        background: 'var(--rose-dark)', borderRadius: '20px',
        padding: '32px', textAlign: 'center',
      }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', color: 'white', marginBottom: '8px' }}>
          Passe à l'étape suivante
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginBottom: '20px' }}>
          Génère ton planning semaine avec liste de courses.
        </p>
        <button onClick={() => router.push('/organisation')} style={{
          background: 'var(--rose-mid)', color: 'white', border: 'none',
          borderRadius: '30px', padding: '13px 28px', fontSize: '13px',
          fontWeight: '500', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
        }}>
          Voir mon planning →
        </button>
      </div>

      {selected && <RecipeDetail recipe={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}