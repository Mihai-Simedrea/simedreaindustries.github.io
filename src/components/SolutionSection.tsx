const solutions = [
  {
    tag: 'Rezervări online',
    title: 'Restaurantul tău lucrează și când tu nu ești acolo.',
  },
  {
    tag: 'Prezență digitală',
    title: 'Prima impresie se formează online.',
  },
  {
    tag: 'Meniu digital',
    title: 'Ce promiți online e exact ce găsesc la masă.',
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
            Construim prezența digitală
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
            pe care restaurantul tău o merită.
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
                display: 'flex',
                flexDirection: 'column' as const,
                gap: 16,
              }}
            >
              <div
                style={{
                  position: 'absolute' as const,
                  top: 0, left: 0, right: 0,
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
                  alignSelf: 'flex-start',
                }}
              >
                {s.tag}
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.2rem, 1.6vw, 1.4rem)',
                  color: 'var(--text)',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                {s.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
