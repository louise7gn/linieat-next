'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  const links = [
    { href: '/recettes', label: 'Recettes' },
    { href: '/macros', label: 'Besoins nutritifs' },
    { href: '/physique', label: 'Objectifs physiques' },
    { href: '/organisation', label: 'Organisation' },
  ]

  return (
    <nav style={{
      width: '100%', maxWidth: '900px', margin: '16px auto',
      background: 'white', borderRadius: '18px',
      border: '0.5px solid var(--border)',
      padding: '0 20px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between',
      height: '56px',
    }}>
      <Link href="/" style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: '20px', color: 'var(--text)',
        textDecoration: 'none', fontWeight: 'bold',
      }}>
        Linieat
      </Link>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontSize: '13px',
            color: path === l.href ? 'var(--rose)' : 'var(--text)',
            textDecoration: 'none',
            fontWeight: path === l.href ? '500' : '400',
          }}>
            {l.label}
          </Link>
        ))}
        <Link href="/quiz" style={{
          background: 'var(--rose)', color: 'white',
          padding: '8px 16px', borderRadius: '20px',
          fontSize: '12px', fontWeight: '500',
          textDecoration: 'none',
        }}>
          Commencer
        </Link>
      </div>
    </nav>
  )
}