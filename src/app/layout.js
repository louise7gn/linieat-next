'use client'

import './globals.css'
import { Molle } from 'next/font/google'
import { useEffect } from 'react'
import { supabase } from '@/utils/supabaseClient'

const molle = Molle({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-molle'
})

const PALETTES = {
  '#815f4a': {
    '--rose': '#815f4a', '--rose-light': '#f2ebe6', '--rose-mid': '#a07860',
    '--rose-dark': '#2e1a0e', '--rose-soft': '#d4b8a8', '--text': '#1a0e08',
    '--text-muted': '#4a2e1a', '--text-light': '#a07860', '--border': '#d4b8a8',
    '--bg': '#faf6f3', '--sage': '#a07860', '--sage-light': '#e8d8cc',
  },
  '#ff6b16': {
    '--rose': '#ff6b16', '--rose-light': '#fff0e8', '--rose-mid': '#ff9a5c',
    '--rose-dark': '#2e1000', '--rose-soft': '#ffd0b0', '--text': '#1a0800',
    '--text-muted': '#4a1e00', '--text-light': '#ff9a5c', '--border': '#ffd0b0',
    '--bg': '#fffaf7', '--sage': '#ff9a5c', '--sage-light': '#ffe8d4',
  },
  '#7fc77f': {
    '--rose': '#7fc77f', '--rose-light': '#eef7ee', '--rose-mid': '#a0d4a0',
    '--rose-dark': '#0e2e0e', '--rose-soft': '#c8e8c8', '--text': '#081a08',
    '--text-muted': '#1a4a1a', '--text-light': '#5a9e5a', '--border': '#c8e8c8',
    '--bg': '#f7fbf7', '--sage': '#5a9e5a', '--sage-light': '#daf0da',
  },
  '#4d8fda': {
    '--rose': '#4d8fda', '--rose-light': '#e8f2fc', '--rose-mid': '#7aaeea',
    '--rose-dark': '#0a1e3a', '--rose-soft': '#b8d4f4', '--text': '#061020',
    '--text-muted': '#1a3a5a', '--text-light': '#7aaeea', '--border': '#b8d4f4',
    '--bg': '#f5f9fe', '--sage': '#7aaeea', '--sage-light': '#d4e8f8',
  },
  '#b81a90': {
    '--rose': '#b81a90', '--rose-light': '#fce8f6', '--rose-mid': '#d060b0',
    '--rose-dark': '#2e0020', '--rose-soft': '#f0b0de', '--text': '#1a0014',
    '--text-muted': '#4a0038', '--text-light': '#d060b0', '--border': '#f0b0de',
    '--bg': '#fef5fc', '--sage': '#d060b0', '--sage-light': '#f8d4ee',
  },
  '#fca400': {
    '--rose': '#fca400', '--rose-light': '#fff3d7', '--rose-mid': '#F0B030',
    '--rose-dark': '#271706', '--rose-soft': '#ffe578', '--text': '#1A0E00',
    '--text-muted': '#4A2800', '--text-light': '#C8A050', '--border': '#ffe578',
    '--bg': '#fffaf1', '--sage': '#F0B030', '--sage-light': '#FAE8B0',
  },
  '#70dada': {
    '--rose': '#70dada', '--rose-light': '#e8fafa', '--rose-mid': '#98e8e8',
    '--rose-dark': '#0a2e2e', '--rose-soft': '#c0f0f0', '--text': '#041818',
    '--text-muted': '#1a4a4a', '--text-light': '#50b8b8', '--border': '#c0f0f0',
    '--bg': '#f4fefe', '--sage': '#50b8b8', '--sage-light': '#d8f4f4',
  },
  '#fa71c6': {
    '--rose': '#fa71c6', '--rose-light': '#feeef9', '--rose-mid': '#fc98d8',
    '--rose-dark': '#2e0020', '--rose-soft': '#fcc8ec', '--text': '#1a0014',
    '--text-muted': '#4a0038', '--text-light': '#fc98d8', '--border': '#fcc8ec',
    '--bg': '#fef6fc', '--sage': '#fc98d8', '--sage-light': '#fee0f4',
  },
  '#c00000': {
    '--rose': '#c00000', '--rose-light': '#fce8e8', '--rose-mid': '#e04040',
    '--rose-dark': '#2e0000', '--rose-soft': '#f4b0b0', '--text': '#1a0000',
    '--text-muted': '#4a0000', '--text-light': '#e04040', '--border': '#f4b0b0',
    '--bg': '#fef7f7', '--sage': '#e04040', '--sage-light': '#f8d4d4',
  },
}

export default function RootLayout({ children }) {
  useEffect(() => {
    const fetchAmbassadorTheme = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: profile } = await supabase
        .from('profiles')
        .select('ambassador_id')
        .eq('id', user.id)
        .single()

      if (!profile?.ambassador_id) return

      const { data: amb } = await supabase
        .from('ambassadors')
        .select('primary_color')
        .eq('id', profile.ambassador_id)
        .single()

      if (amb?.primary_color) {
        const palette = PALETTES[amb.primary_color]
        if (palette) {
          Object.entries(palette).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value)
          })
        }
      }
    }
    fetchAmbassadorTheme()
  }, [])

  return (
    <html lang="fr" className={molle.variable}>
      <body>{children}</body>
    </html>
  )
}