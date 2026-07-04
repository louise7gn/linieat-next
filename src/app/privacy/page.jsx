export default function PrivacyPage() {
  const s = {
    wrap:    { maxWidth: '680px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: "'DM Sans', sans-serif", color: 'var(--text)' },
    h1:      { fontFamily: "'DM Serif Display', serif", fontSize: '32px', marginBottom: '8px' },
    date:    { fontSize: '12px', color: 'var(--text-muted)', marginBottom: '40px' },
    section: { marginBottom: '32px' },
    h2:      { fontSize: '16px', fontWeight: '600', color: 'var(--text)', marginBottom: '10px' },
    p:       { fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' },
  }

  return (
    <div style={s.wrap}>
      <h1 style={s.h1}>Politique de confidentialité</h1>
      <p style={s.date}>Dernière mise à jour : juillet 2025</p>

      <div style={s.section}>
        <h2 style={s.h2}>1. Qui sommes-nous ?</h2>
        <p style={s.p}>Linieat est un service de planification nutritionnelle personnalisée édité par Louise Gehan, domiciliée à Toulouse, France.</p>
        <p style={s.p}>Contact : contact.linieat@gmail.com</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>2. Données collectées</h2>
        <p style={s.p}>Adresse email (authentification uniquement).</p>
        <p style={s.p}>Données de santé et morphologiques : poids, taille, âge, genre, niveau d'activité physique, objectif nutritionnel.</p>
        <p style={s.p}>Données alimentaires : régime, aliments aimés et évités, préférences de repas.</p>
        <p style={s.p}>Aucun cookie de tracking tiers n'est utilisé.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>3. Pourquoi nous collectons ces données</h2>
        <p style={s.p}>Ces données sont collectées dans le seul but de générer un planning nutritionnel personnalisé adapté à ton profil. Elles ne sont utilisées à aucune autre fin (publicité, revente, profilage commercial).</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>4. Base légale (RGPD)</h2>
        <p style={s.p}>Le traitement repose sur ton consentement explicite donné lors de la complétion du quiz (article 6.1.a et article 9.2.a du RGPD pour les données de santé). Tu peux retirer ce consentement à tout moment en supprimant ton compte.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>5. Données de santé</h2>
        <p style={s.p}>Les données morphologiques et l'objectif nutritionnel constituent des données relatives à la santé au sens du RGPD. Elles sont stockées de façon chiffrée (Supabase, SOC 2), accessibles uniquement par toi et ton coach partenaire le cas échéant.</p>
        <p style={s.p}>Linieat est un outil de bien-être, pas un dispositif médical.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>6. Qui a accès à tes données ?</h2>
        <p style={s.p}>Toi uniquement, sauf : ton coach partenaire (profil nutritionnel uniquement), Supabase (hébergement, serveurs en Europe) et Resend (envoi du lien de connexion).</p>
        <p style={s.p}>Nous ne vendons, ne louons et ne partageons tes données avec aucun tiers à des fins commerciales.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>7. Durée de conservation</h2>
        <p style={s.p}>Tes données sont conservées tant que ton compte est actif. En cas de suppression de compte, toutes tes données personnelles sont effacées dans un délai de 30 jours.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>8. Tes droits</h2>
        <p style={s.p}>Tu disposes des droits d'accès, de rectification, de suppression, de portabilité et d'opposition.</p>
        <p style={s.p}>Rectification et suppression : Paramètres de ton compte. Autres demandes : contact@linieat.com</p>
        <p style={s.p}>Tu peux également contacter la CNIL sur cnil.fr</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>9. Sécurité</h2>
        <p style={s.p}>Tes données sont hébergées sur Supabase (SOC 2 Type II). L'authentification utilise un système de lien magique sans mot de passe. Toutes les communications sont chiffrées via HTTPS/TLS.</p>
      </div>

      <div style={s.section}>
        <h2 style={s.h2}>10. Modifications</h2>
        <p style={s.p}>Cette politique peut être mise à jour. En cas de modification substantielle, tu seras notifié par email.</p>
      </div>
    </div>
  )
}