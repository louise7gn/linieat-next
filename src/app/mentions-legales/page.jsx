import Layout from '@/components/Layout'

export default function MentionsLegales() {
  return (
    <Layout>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px 80px' }}>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', marginBottom: '32px' }}>
          Mentions légales
        </h1>

        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Éditeur</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
          Linieat : projet étudiant incubé au sein de PÉPITE ÉCRIN, Université Fédérale Toulouse.<br />
          Responsable de publication : Louise Gehan<br />
          Contact : louise.gehan@etu.toulouse-inp.fr
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Hébergement</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
          Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
          Base de données : Supabase, 970 Toa Payoh North, Singapour
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Données personnelles</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
          Les données collectées (email, données physiques et nutritionnelles) sont utilisées uniquement pour le fonctionnement de l'application et ne sont jamais revendues à des tiers.<br />
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : louise.gehan@etu.toulouse-inp.fr
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Cookies</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
          Linieat utilise uniquement des cookies techniques nécessaires au fonctionnement de l'authentification. Aucun cookie publicitaire n'est utilisé.
        </p>

        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Propriété intellectuelle</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          L'ensemble du contenu de ce site (recettes, algorithmes, design) est la propriété exclusive de Linieat. Toute reproduction est interdite sans autorisation.
        </p>
      </div>
    </Layout>
  )
}