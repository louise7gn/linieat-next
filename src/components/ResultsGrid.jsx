// src/components/ResultsGrid.jsx
import React from 'react';

const ResultsGrid = ({ recipes, onGeneratePlanning }) => {
  return (
    <div className="res-grid-container">
      <div className="res-grid-header">
        <h3 className="res-grid-title">Tes recettes recommandées</h3>
        <p className="res-grid-sub">Sélectionnées selon tes objectifs et tes goûts.</p>
      </div>

      <div className="res-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-thumb" style={{ background: 'var(--rose-light)' }}>
              <img src={recipe.img} alt={recipe.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="recipe-body">
              <div className="recipe-name">{recipe.name}</div>
              <div className="recipe-tags">
                <span className="rtag rtag-k">{recipe.kcal} kcal</span>
                <span className="rtag rtag-t">{recipe.time} min</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="res-footer">
        <button className="btn-primary" onClick={onGeneratePlanning}>
          Générer mon planning semaine →
        </button>
      </div>

      <style jsx>{`
        .res-grid-header { margin-bottom: 20px; }
        .res-grid-title { font-family: 'DM Serif Display', serif; font-size: 20px; color: var(--text); }
        .res-grid-sub { font-size: 13px; color: var(--text-muted); font-weight: 300; }
        .res-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .recipe-card { background: white; border-radius: 16px; overflow: hidden; border: 0.5px solid rgba(176,68,106,0.08); cursor: pointer; transition: transform 0.15s; }
        .recipe-card:hover { transform: translateY(-2px); }
        .recipe-thumb { height: 82px; }
        .recipe-body { padding: 10px 12px 12px; }
        .recipe-name { font-size: 11px; font-weight: 500; color: var(--text); margin-bottom: 4px; line-height: 1.3; }
        .rtag { font-size: 8px; padding: 2px 7px; border-radius: 8px; font-weight: 500; margin-right: 4px; }
        .rtag-k { background: #FAF6ED; color: #C8780A; }
        .rtag-t { background: #F5F3F0; color: #4A2800; }
        .res-footer { margin-top: 40px; text-align: center; }
      `}</style>
    </div>
  );
};

export default ResultsGrid;