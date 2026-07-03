// Fichier : app/science/page.jsx

import Link from 'next/link'

export const metadata = {
  title: 'Bases scientifiques de Linieat',
  description: "Chaque calcul de Linieat repose sur des références scientifiques validées. Rien n'est inventé.",
}

const PRINCIPLES = [
  {
    id: '01',
    category: 'Énergie',
    title: 'Métabolisme de base',
    equation: 'Équation de Mifflin-St Jeor (1990)',
    body: "Le métabolisme de base (BMR) est la quantité d'énergie dépensée par un organisme au repos absolu. Linieat le calcule selon l'équation de Mifflin-St Jeor, désignée comme la méthode prédictive la plus précise parmi cinq équations évaluées : elle atteint une marge d'erreur inférieure à 10 % dans 82 % des cas sur une population adulte saine.",
    application: "Votre BMR est calculé à partir de votre poids, taille, âge et sexe biologique — les quatre paramètres de l'équation originale.",
    refs: [
      "Mifflin MD, St Jeor ST, Hill LA et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241–247.",
      "Frankenfield D, Roth-Yousey L, Compher C. Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults. J Am Diet Assoc. 2005;105(5):775–789.",
    ],
  },
  {
    id: '02',
    category: 'Activité',
    title: 'Dépense énergétique totale',
    equation: 'Facteurs PAL : DRI & Santé Canada (2005)',
    body: "La dépense totale journalière (TDEE) est obtenue en multipliant le BMR par un facteur d'activité physique (PAL). Ces facteurs sont définis par les Apports Nutritionnels de Référence (DRI), publiés par l'Institute of Medicine et adoptés par Santé Canada comme référence officielle pour la population nord-américaine.",
    application: "Votre TDEE est ajusté selon votre niveau d'activité déclaré, puis affiné automatiquement par votre nombre de pas quotidien moyen.",
    refs: [
      "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. Washington, DC: National Academies Press, 2005.",
      "Santé Canada. Valeurs nutritives de référence pour les Canadiens. Ottawa : Gouvernement du Canada, 2010.",
    ],
  },
  {
    id: '03',
    category: 'Mouvement',
    title: 'Nombre de pas & activité quotidienne',
    equation: 'Tudor-Locke & Bassett (Sports Med, 2004) · Warburton et al. (CMAJ, 2006)',
    body: "Le nombre de pas quotidiens est un indicateur validé du niveau d'activité physique habituelle, notamment du NEAT (Non-Exercise Activity Thermogenesis). Linieat l'utilise pour affiner automatiquement le facteur PAL selon la classification de Tudor-Locke & Bassett, complétée par les recommandations canadiennes publiées dans le CMAJ.",
    application: "Votre nombre de pas moyen ; que vous pouvez vérifier sur votre téléphone ou montre connectée, détermine automatiquement votre catégorie d'activité sans estimation manuelle.",
    refs: [
      "Tudor-Locke C, Bassett DR Jr. How many steps/day are enough? Preliminary pedometer indices for public health. Sports Med. 2004;34(1):1–8.",
      "Warburton DER, Nicol CW, Bredin SSD. Health benefits of physical activity: the evidence. CMAJ. 2006;174(6):801–809.",
    ],
  },
  {
    id: '04',
    category: 'Macronutriments',
    title: 'Répartition protéines, glucides, lipides',
    equation: 'DRI & Santé Canada (2005) · Phillips & Van Loon (J Sports Sci, 2011)',
    body: "Les fourchettes d'apport en macronutriments sont établies selon les Apports Nutritionnels de Référence (ANR/DRI), modulées selon votre objectif et votre discipline. Les besoins protéiques pour les sportifs sont calculés selon Phillips & Van Loon, référence internationale en nutrition sportive, recommandée par les Diététistes du Canada.",
    application: "Les cibles protéiques varient de 0,8 g/kg (maintenance) à 2,2 g/kg (musculation). Glucides et lipides sont répartis en fonction de votre objectif et de votre type d'activité.",
    refs: [
      "Institute of Medicine. Dietary Reference Intakes for Macronutrients. Washington, DC: National Academies Press, 2005.",
      "Phillips SM, Van Loon LJC. Dietary protein for athletes: From requirements to optimum adaptation. J Sports Sci. 2011;29 Suppl 1:S29–38.",
      "Diététistes du Canada. Manuel de nutrition clinique. 4e éd. Diététistes du Canada, 2020.",
    ],
  },
  {
    id: '05',
    category: 'Objectif',
    title: 'Déficit calorique raisonné',
    equation: 'Hall et al. (Lancet, 2011) · Diététistes du Canada (2020)',
    body: "Linieat applique un déficit modéré de 250 à 350 kcal par jour pour un objectif de perte de poids, soit une perte attendue de 0,25 à 0,35 kg par semaine. Cette approche préserve la masse musculaire et stabilise le métabolisme. Elle est conforme aux recommandations des Diététistes du Canada, qui écartent les déficits agressifs.",
    application: "Aucun plan Linieat ne dépasse 350 kcal de déficit journalier. La perte de poids rapide n'est pas proposée : ce n'est pas l'objectif de Linieat.",
    refs: [
      "Hall KD, Sacks G, Chandramohan D et al. Quantification of the effect of energy imbalance on bodyweight. Lancet. 2011;378(9793):826–837.",
      "Diététistes du Canada. Recommandations fondées sur les preuves pour la gestion du poids. 2020.",
    ],
  },
]

const buildBibliography = (principles) => {
  let index = 1
  const bibliography = []
  const refMap = {}
  principles.forEach((p) => {
    p.refs.forEach((ref) => {
      if (!refMap[ref]) {
        refMap[ref] = index++
        bibliography.push(ref)
      }
    })
  })
  return { bibliography, refMap }
}

export default function SciencePage() {
  const { bibliography, refMap } = buildBibliography(PRINCIPLES)

  return (
    <>
      <style>{`
        .science-page { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; min-height: 100vh; }

        .science-hero { background: var(--rose-dark); padding: clamp(28px, 4vw, 40px) clamp(20px, 5vw, 40px); }
        .science-hero-inner { max-width: 720px; margin: 0 auto; }

        .science-back { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--rose-soft); text-decoration: none; margin-bottom: 20px; opacity: 0.75; transition: opacity 0.15s; }
        .science-back:hover { opacity: 1; }

        .science-hero-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--rose); margin: 0 0 16px; }
        .science-hero-h1 { font-family: 'DM Serif Display', serif; font-size: clamp(32px, 6vw, 52px); font-weight: 400; line-height: 1.1; color: var(--white); margin: 0 0 20px; }
        .science-hero-h1 .molle { font-family: var(--font-molle); }
        .science-hero-sub { font-size: clamp(13px, 1.8vw, 15px); line-height: 1.75; color: var(--rose-soft); max-width: 540px; margin: 0; }

        .science-intro { padding: clamp(28px, 5vw, 44px) clamp(20px, 5vw, 40px); border-bottom: 1px solid var(--border); }
        .science-intro-inner { max-width: 720px; margin: 0 auto; }
        .science-intro p { font-size: 13px; line-height: 1.75; color: var(--text-muted); margin: 0; font-style: normal; font-weight: 400; }

        .science-principles { padding: clamp(36px, 6vw, 64px) clamp(20px, 5vw, 40px); max-width: 720px; margin: 0 auto; }

        .science-article { border-top: 1px solid var(--border); padding-top: 36px; margin-bottom: 48px; }
        .science-article-header { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 4px; }
        .science-article-num { font-family: 'DM Serif Display', serif; font-size: 48px; font-weight: 400; color: var(--rose-soft); line-height: 0.9; flex-shrink: 0; user-select: none; }
        .science-article-category { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--rose); margin: 0 0 4px; }
        .science-article-title { font-family: 'DM Serif Display', serif; font-size: clamp(20px, 3vw, 26px); font-weight: 400; color: var(--text); margin: 0; line-height: 1.2; }
        .science-article-equation { font-size: 12px; font-style: italic; color: var(--text-light); margin: 0 0 18px; padding-left: 68px; }
        .science-article-body { font-size: 14px; line-height: 1.8; color: var(--text-muted); margin: 0 0 18px; }

        .science-application { border-left: 3px solid var(--rose); background: var(--rose-light); padding: 14px 18px; margin: 0 0 18px; }
        .science-application-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--rose); margin: 0 0 6px; }
        .science-application-text { font-size: 13px; line-height: 1.7; color: var(--text); margin: 0; }

        .science-refs p { font-size: 11px; line-height: 1.6; color: var(--text-light); font-style: italic; margin: 0 0 3px; }

        .science-bib { background: var(--rose-light); padding: clamp(36px, 6vw, 56px) clamp(20px, 5vw, 40px); }
        .science-bib-inner { max-width: 720px; margin: 0 auto; }
        .science-bib-label { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--rose); margin: 0 0 24px; }
        .science-bib ol { padding-left: 20px; margin: 0; }
        .science-bib li { font-size: 12px; line-height: 1.75; color: var(--text-muted); font-style: italic; margin-bottom: 10px; }

        .science-disclaimer { border-top: 1px solid var(--border); padding: clamp(20px, 3vw, 32px) clamp(20px, 5vw, 40px); }
        .science-disclaimer-inner { max-width: 720px; margin: 0 auto; }
        .science-disclaimer p { font-size: 11px; line-height: 1.7; color: var(--text-light); }
        .science-disclaimer strong { color: var(--rose); font-weight: 500; }

        @media (max-width: 520px) {
          .science-article-header { flex-direction: column; gap: 4px; }
          .science-article-num { font-size: 32px; }
          .science-article-equation { padding-left: 0; }
        }
      `}</style>

      <div className="science-page">

        {/* HERO */}
        <section className="science-hero">
          <div className="science-hero-inner">
            <Link href="/" className="science-back">← Retour</Link>
            <p className="science-hero-eyebrow">Méthodologie scientifique</p>
            <h1 className="science-hero-h1">
              Chaque chiffre a une source.
            </h1>
            <p className="science-hero-sub">
              <span style={{ fontFamily: "var(--font-molle), serif" }}>Lin<em style={{ color: 'var(--rose)' }}>i</em>eat</span>  ne s'invente rien.
              Chaque calcul repose sur des références publiées dans des revues à comité de lecture
              et sur les recommandations officielles de Santé.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="science-intro">
          <div className="science-intro-inner">
            <p>
              La nutrition est un domaine où les opinions abondent et les mythes persistent.
              Linieat fait le choix inverse : chaque paramètre est traçable, vérifiable,
              et fondé sur des travaux publiés. Voici les cinq principes qui structurent
              notre moteur de calcul et leurs sources exactes.
            </p>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="science-principles">
          {PRINCIPLES.map((p) => (
            <article key={p.id} className="science-article">
              <div className="science-article-header">
                <span className="science-article-num">{p.id}</span>
                <div style={{ paddingTop: 4 }}>
                  <p className="science-article-category">{p.category}</p>
                  <h2 className="science-article-title">{p.title}</h2>
                </div>
              </div>

              <p className="science-article-equation">{p.equation}</p>
              <p className="science-article-body">{p.body}</p>

              <div className="science-application">
                <p className="science-application-label">
                  Dans Lin<em style={{ color: 'var(--rose)' }}>i</em>eat
                </p>
                <p className="science-application-text">{p.application}</p>
              </div>

              <div className="science-refs">
                {p.refs.map((ref) => (
                  <p key={ref}>[{refMap[ref]}] {ref}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* BIBLIOGRAPHY */}
        <section className="science-bib">
          <div className="science-bib-inner">
            <p className="science-bib-label">Bibliographie complète</p>
            <ol>
              {bibliography.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="science-disclaimer">
          <div className="science-disclaimer-inner">
            <p>
              <strong>Note légale — </strong>
              Linieat est un outil de bien-être nutritionnel. Les calculs fournis reposent sur des équations
              validées sur des populations adultes en bonne santé et ne constituent pas un avis médical
              ou diététique individualisé. Consultez un professionnel de santé pour toute situation médicale,
              pathologie, grossesse ou besoin nutritionnel spécifique.
            </p>
          </div>
        </section>

      </div>
    </>
  )
}