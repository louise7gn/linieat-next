import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Service role key uniquement côté serveur — jamais dans le client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function DELETE(request) {
  try {
    const { userId } = await request.json()
    if (!userId) return NextResponse.json({ error: 'userId manquant' }, { status: 400 })

    await supabaseAdmin.from('user_quiz_results').delete().eq('user_id', userId)
    await supabaseAdmin.from('user_planning').delete().eq('user_id', userId)

    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}