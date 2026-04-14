interface FinalCTAProps {
  onCta: () => void
}

export default function FinalCTA({ onCta }: FinalCTAProps) {
  return (
    <section
      id="contact"
      style={{ background: 'var(--green)', padding: '120px 5vw', position: 'relative' as const, overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(circle, rgba(201,99,58,0.14) 0%, transparent 65%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto', textAlign: 'center' as const }}>
        <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.72, marginBottom: 36, fontWeight: 300 }}>
          Îți construim un demo personalizat în 48 de ore să vezi exact cum ar arăta restaurantul tău online. Dacă nu îți place, nu plătești nimic.
        </p>

        <button
          onClick={onCta}
          style={{ background: 'var(--orange)', color: '#fff', border: 'none', padding: '18px 48px', borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, cursor: 'pointer', transition: 'all 0.22s ease', display: 'inline-block' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Arată-mi cum să nu mai pierd clienți
        </button>

        <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
          Fără obligații. Fără card.
        </p>
      </div>
    </section>
  )
}
