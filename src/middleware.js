import { NextResponse } from 'next/server'

// ─── MOT DE PASSE DE PRÉVISUALISATION ────────────────────────────────────────
// Change PREVIEW_PASSWORD dans les variables d'environnement Vercel
// (Settings → Environment Variables → PREVIEW_PASSWORD)
// Ne jamais hardcoder le mot de passe ici en production.
const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD
const COOKIE_NAME      = 'linieat_preview_auth'
const COOKIE_MAX_AGE   = 60 * 60 * 24 * 7 // 7 jours

// Routes exclues de la protection (auth, assets, api internes)
const PUBLIC_PATHS = [
  '/preview-login',
  '/api/preview-auth',
  '/auth/callback',
  '/_next',
  '/favicon.ico',
]

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Si PREVIEW_PASSWORD n'est pas défini → protection désactivée
  if (!PREVIEW_PASSWORD) return NextResponse.next()

  // Routes publiques : laisser passer
  if (PUBLIC_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // Vérifier le cookie d'authentification
  const cookie = request.cookies.get(COOKIE_NAME)
  if (cookie?.value === PREVIEW_PASSWORD) {
    return NextResponse.next()
  }

  // Rediriger vers la page de login preview
  const loginUrl = new URL('/preview-login', request.url)
  loginUrl.searchParams.set('redirect', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}