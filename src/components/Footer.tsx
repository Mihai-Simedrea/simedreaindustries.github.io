const navLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#solutia', label: 'Soluția' },
  { href: '#proces', label: 'Proces' },
  { href: '#contact', label: 'Contact' },
]

const BASE = import.meta.env.BASE_URL

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060E0C',
        padding: '52px 5vw',
        color: 'rgba(255,255,255,0.28)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap' as const,
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
          <img
            src={`${BASE}logo.svg`}
            alt="Simedrea Industries"
            style={{ height: 20, width: 'auto', opacity: 0.25, filter: 'invert(1)' }}
          />
          <span style={{ fontSize: 13 }}>Simedrea Industries © 2026</span>
        </div>

        <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' as const, alignItems: 'center' }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@simedreaindustries.com"
            style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
          >
            hello@simedreaindustries.com
          </a>
        </nav>
      </div>
    </footer>
  )
}
