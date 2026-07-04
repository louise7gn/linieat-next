import { NextResponse } from 'next/server'

const COOKIE_NAME    = 'linieat_preview_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 jours

export async function POST(request) {
  const { password } = await request.json()

  if (!password || password.trim() !== process.env.PREVIEW_PASSWORD?.trim()) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE_NAME, password, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   COOKIE_MAX_AGE,
    path:     '/',
  })

  return response
}