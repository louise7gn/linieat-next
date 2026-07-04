import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const COOKIE_NAME    = 'linieat_preview_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 jours

export async function POST(request) {
  const { password } = await request.json()

  if (!password || password !== process.env.PREVIEW_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const cookieStore = cookies()
  cookieStore.set(COOKIE_NAME, password, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   COOKIE_MAX_AGE,
    path:     '/',
  })

  return NextResponse.json({ ok: true })
}