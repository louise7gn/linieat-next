import './globals.css'

export const metadata = {
  title: 'Linieat — Mange ce que tu veux. Atteins ce que tu veux.',
  description: 'Planning alimentaire personnalisé selon tes objectifs et tes goûts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}