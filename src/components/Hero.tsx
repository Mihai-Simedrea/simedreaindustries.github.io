interface HeroProps {
  onCta: () => void
}

export default function Hero({ onCta }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 5vw 80px',
        background: 'linear-gradient(150deg, #072E26 0%, #0A3D33 45%, #0D4A3C 100%)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.045) 1.5px, transparent 0)', backgroundSize: '40px 40px', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: -160, right: -100, width: 700, height: 700, background: 'radial-gradient(circle, rgba(201,99,58,0.13) 0%, transparent 65%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -80, left: -80, width: 500, height: 500, background: 'radial-gradient(circle, rgba(15,81,68,0.4) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', color: '#ffffff', lineHeight: 1.18, fontWeight: 700, marginBottom: 28 }}>
          Se pare că lași concurența să-ți fure clienții,{' '}
          <em style={{ fontStyle: 'italic', color: '#E8C07A' }}>
            deși mâncarea ta e mult mai bună.
          </em>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,0.62)', lineHeight: 1.78, marginBottom: 48, fontWeight: 300, maxWidth: 580 }}>
          Clienții tăi nu mai au răbdare să sune. Vor să rezerve din 3 click-uri, noaptea, de pe telefon. Când îi obligi să aștepte, îi trimiți cu mâna ta la restaurantul de vizavi.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
          <button
            onClick={onCta}
            style={{ background: 'var(--orange)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: 'pointer', transition: 'all 0.22s ease', letterSpacing: '0.2px' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Arată-mi cum să nu mai pierd clienți
          </button>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', fontWeight: 300, margin: 0 }}>
            Fără obligații. Fără card.
          </p>
        </div>
      </div>
    </section>
  )
}
