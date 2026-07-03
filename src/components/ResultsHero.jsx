// src/components/ResultsHero.jsx
import React from 'react';

const ResultsHero = ({ macros }) => {
  const { kcal, proteins, carbs, lipids } = macros;

  return (
    <div className="res-hero">
      <h2 className="res-hero-title">Tes besoins nutritionnels</h2>
      <p className="res-hero-sub">Basé sur ton métabolisme et ton objectif, voici ton équilibre parfait.</p>
      
      <div className="res-macros-grid">
        <div className="res-macro-card">
          <div className="res-macro-val">{kcal}</div>
          <div className="res-macro-label">Kcal / jour</div>
          <div className="res-macro-bar" style={{ background: 'var(--rose-soft)' }}>
            <div className="res-macro-fill" style={{ background: 'var(--rose)', width: '100%' }}></div>
          </div>
        </div>
        
        <div className="res-macro-card">
          <div className="res-macro-val">{proteins}g</div>
          <div className="res-macro-label">Protéines</div>
          <div className="res-macro-bar" style={{ background: 'var(--sage-light)' }}>
            <div className="res-macro-fill" style={{ background: 'var(--sage)', width: '30%' }}></div>
          </div>
        </div>
        
        <div className="res-macro-card">
          <div className="res-macro-val">{carbs}g</div>
          <div className="res-macro-label">Glucides</div>
          <div className="res-macro-bar" style={{ background: 'var(--gold-light)' }}>
            <div className="res-macro-fill" style={{ background: 'var(--gold)', width: '45%' }}></div>
          </div>
        </div>
        
        <div className="res-macro-card">
          <div className="res-macro-val">{lipids}g</div>
          <div className="res-macro-label">Lipides</div>
          <div className="res-macro-bar" style={{ background: 'var(--peach-light)' }}>
            <div className="res-macro-fill" style={{ background: 'var(--peach)', width: '25%' }}></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .res-hero { background: white; border-radius: 20px; border: 0.5px solid var(--border); padding: 28px 32px; margin-bottom: 24px; text-align: center; }
        .res-hero-title { font-family: 'DM Serif Display', serif; font-size: 28px; color: var(--text); margin-bottom: 6px; }
        .res-hero-sub { font-size: 14px; color: var(--text-muted); font-weight: 300; margin-bottom: 24px; }
        .res-macros-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .res-macro-card { background: var(--bg); padding: 16px; border-radius: 16px; text-align: center; }
        .res-macro-val { font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--text); margin-bottom: 4px; }
        .res-macro-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); margin-bottom: 12px; }
        .res-macro-bar { height: 4px; border-radius: 2px; overflow: hidden; }
        .res-macro-fill { height: 100%; border-radius: 2px; transition: width 1s ease-out; }
      `}</style>
    </div>
  );
};

export default ResultsHero;