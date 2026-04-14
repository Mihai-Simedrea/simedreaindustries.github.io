const problems = [
  {
    number: '01',
    title: 'Cum preiei rezervările clienților care se hotărăsc la miezul nopții unde ies în weekend?',
    body: 'Probabil preferi siguranța agendei clasice, însă realitatea este că mulți oameni evită apelurile telefonice sau își planifică ieșirile seara târziu, când restaurantul tău este închis. Dacă nu le oferi opțiunea să rezerve instant, din câteva click-uri și la orice oră, vor alege un loc care le permite asta. Fără un sistem online, cedezi clienți concurenței chiar și în timp ce dormi.',
  },
  {
    number: '02',
    title: 'Ce gust are mâncarea ta pentru un client care nu ajunge niciodată să o comande?',
    body: 'Știi că oferi calitate și te bazezi pe faptul că mâncarea excelentă atrage mereu oameni. Însă mâncăm mai întâi cu ochii, iar imaginea este cea care cucerește. Un client nou te judecă instantaneu după prezența online, iar oamenii se plictisesc rapid căutând un meniu rătăcit printre postările de pe Facebook. Când experiența lor digitală este haotică, presupun automat că aceleași standarde se aplică și în bucătărie.',
  },
  {
    number: '03',
    title: 'Ce se întâmplă când promiți ceva online, dar la masă oferi altceva?',
    body: 'Știm că ai zeci de urgențe zilnice, iar să depinzi de altcineva pentru a schimba un preț pe site pare o corvoadă inutilă. Dar un meniu online neactualizat distruge instantaneu încrederea. Când oaspetele descoperă preparate lipsă sau prețuri vechi, se simte indus în eroare. Această frustrare se transformă rapid în recenzii care îți sabotează toată munca din bucătărie.',
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
            maxWidth: 620,
          }}
        >
          Ai renunțat la ideea de a avea mesele pline în fiecare seară?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                display: 'flex',
                flexDirection: 'column' as const,
                gap: 16,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.4rem',
                  color: 'rgba(232,192,122,0.22)',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {p.number}
              </div>

              {/* Title — mare, bold, iese în evidență */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
                  color: '#ffffff',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>

              {/* Divider subtil între titlu și body */}
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: 'rgba(232,192,122,0.35)',
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />

              {/* Body — justified */}
              <p
                style={{
                  fontSize: '0.93rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.78,
                  margin: 0,
                  textAlign: 'justify' as const,
                  hyphens: 'auto' as const,
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
