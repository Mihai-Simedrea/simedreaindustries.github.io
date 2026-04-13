const problems = [
  {
    number: '01',
    title: 'Nu au rezervări online',
    body: 'Clientul caută un loc pentru vineri seara. Nu găsește cum să rezerve. Alege alt restaurant. Tu pierzi masa — el pierde experiența.',
  },
  {
    number: '02',
    title: 'Website-ul e învechit sau inexistent',
    body: 'Prima impresie contează enorm. Un site slab sau inexistent comunică lipsă de seriozitate. Clienții pleacă înainte să vadă mâncarea.',
  },
  {
    number: '03',
    title: 'Meniul e imposibil de actualizat',
    body: 'Prețurile s-au schimbat, ai scos un fel de mâncare. Dar site-ul spune altceva. Asta creează confuzie și frustrare chiar înainte ca omul să ajungă la tine.',
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problema"
      style={{
        background: 'var(--green)',
        padding: '100px 5vw',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(232,192,122,0.8)',
            textTransform: 'uppercase' as const,
            letterSpacing: '2px',
            display: 'block',
            marginBottom: 16,
          }}
        >
          De ce contează
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: '#fff',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: 56,
            maxWidth: 560,
          }}
        >
          Majoritatea restaurantelor pierd clienți fără să știe de ce.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {problems.map((p) => (
            <div
              key={p.number}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                padding: '36px 32px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3.2rem',
                  color: 'rgba(232,192,122,0.18)',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 20,
                }}
              >
                {p.number}
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  color: '#fff',
                  fontWeight: 500,
                  marginBottom: 12,
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(255,255,255,0.52)',
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
