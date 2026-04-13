const solutions = [
  {
    tag: 'Website modern',
    title: 'Design care inspiră încredere',
    body: 'Un site rapid, elegant și optimizat pentru mobil. Prezintă restaurantul cum merită — cu fotografii, atmosferă și personalitate proprie.',
  },
  {
    tag: 'Meniu digital',
    title: 'Meniu actualizabil oricând',
    body: 'Schimbi prețurile sau adaugi un fel nou? Un mesaj și e gata. Fără agenții, fără costuri suplimentare, fără zile de așteptare.',
  },
  {
    tag: 'Rezervări online',
    title: 'Sistem simplu de rezervare',
    body: 'Clienții rezervă direct de pe site, în 30 de secunde. Tu primești notificarea instant. Nicio masă pierdută din lipsă de răspuns.',
  },
]

export default function SolutionSection() {
  return (
    <section
      id="solutia"
      style={{ padding: '100px 5vw', background: 'var(--cream-light)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--orange)',
            textTransform: 'uppercase' as const,
            letterSpacing: '2px',
            display: 'block',
            marginBottom: 16,
          }}
        >
          Ce construim
        </span>

        <div style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--green)',
              fontWeight: 700,
              lineHeight: 1.22,
              margin: 0,
            }}
          >
            Nu vindem site-uri.
          </h2>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--green)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.22,
              margin: 0,
            }}
          >
            Vindem rezervări.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {solutions.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid rgba(10,61,51,0.08)',
                borderRadius: 14,
                padding: '40px 32px',
                position: 'relative' as const,
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute' as const,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'var(--green)',
                  opacity: 0.12,
                }}
              />

              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(10,61,51,0.07)',
                  color: 'var(--green)',
                  padding: '4px 12px',
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  marginBottom: 20,
                }}
              >
                {s.tag}
              </span>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  color: 'var(--text)',
                  fontWeight: 700,
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--muted)',
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
