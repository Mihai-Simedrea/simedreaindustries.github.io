import { useState, useEffect } from 'react'

interface NavbarProps {
  onCta: () => void
}

const BASE = import.meta.env.BASE_URL

export default function Navbar({ onCta }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#problema', label: 'Problema' },
    { href: '#solutia', label: 'Soluția' },
    { href: '#proces', label: 'Proces' },
    { href: '#contact', label: 'Contact' },
  ]

  const linkColor = scrolled ? '#6B6B63' : 'rgba(255,255,255,0.7)'
  const linkHoverColor = scrolled ? '#0A3D33' : '#ffffff'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(250,245,237,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(10,61,51,0.08)' : '1px solid transparent',
        transition: 'all 0.35s ease',
        padding: '0 5vw',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src={`${BASE}logo.svg`}
            alt="Simedrea Industries"
            style={{
              height: 26,
              width: 'auto',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.35s ease',
            }}
          />
        </a>

        <ul
          style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
          className="simedrea-nav-desktop"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ fontSize: 14, color: linkColor, textDecoration: 'none', fontWeight: 400, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <button
            onClick={onCta}
            style={{
              background: 'var(--orange)', color: '#fff', border: 'none',
              padding: '10px 22px', borderRadius: 7,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--orange-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--orange)')}
            className="simedrea-nav-cta"
          >
            Obține un demo gratuit
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, flexDirection: 'column', gap: 5 }}
            aria-label="Deschide meniu"
            aria-expanded={menuOpen}
            className="simedrea-hamburger"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block', width: 22, height: 2,
                  background: scrolled ? '#0A3D33' : '#ffffff',
                  borderRadius: 2, transition: 'all 0.25s ease',
                  transform:
                    menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                    menuOpen && i === 1 ? 'scaleX(0)' :
                    menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? 400 : 0,
          transition: 'max-height 0.35s ease',
          background: 'rgba(250,245,237,0.98)',
          backdropFilter: 'blur(14px)',
          borderTop: menuOpen ? '1px solid rgba(10,61,51,0.08)' : 'none',
        }}
      >
        <div style={{ padding: '16px 5vw 28px' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '13px 0', fontSize: 16,
                color: '#1A1A18', textDecoration: 'none',
                borderBottom: '1px solid rgba(10,61,51,0.06)', fontWeight: 400,
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onCta() }}
            style={{
              marginTop: 20, width: '100%', background: 'var(--orange)', color: '#fff',
              border: 'none', padding: '15px 0', borderRadius: 7,
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, cursor: 'pointer',
            }}
          >
            Obține un demo gratuit
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .simedrea-nav-desktop { display: none !important; }
          .simedrea-nav-cta { display: none !important; }
          .simedrea-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
