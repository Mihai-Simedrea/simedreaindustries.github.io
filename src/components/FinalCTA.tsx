interface FinalCTAProps {
  onCta: () => void
}

export default function FinalCTA({ onCta }: FinalCTAProps) {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--green)',
        padding: '120px 5vw',
        textAlign: 'center' as const,
        position: 'relative' as const,
        overflow: 'hidden',
      }}
    >
      {/* Warm glow */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 500,
          background:
            'radial-gradient(circle, rgba(201,99,58,0.14) 0%, transparent 65%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 620,
          margin: '0 auto',
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(232,192,122,0.75)',
            textTransform: 'uppercase' as const,
            letterSpacing: '2px',
            display: 'block',
            marginBottom: 20,
          }}
        >
          Primul pas
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#fff',
            fontWeight: 700,
            lineHeight: 1.22,
            marginBottom: 20,
          }}
        >
          Obține un demo gratuit pentru restaurantul tău
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.52)',
            lineHeight: 1.72,
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          Construim demo-ul tău personalizat în 48 de ore.
          <br />
          Fără riscuri, fără obligații.
        </p>

        <button
          onClick={onCta}
          style={{
            background: 'var(--orange)',
            color: '#fff',
            border: 'none',
            padding: '20px 48px',
            borderRadius: 8,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.22s ease',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--orange-dark)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--orange)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Obține un demo gratuit
        </button>

        <div
          style={{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            flexWrap: 'wrap' as const,
            fontSize: 13,
            color: 'rgba(255,255,255,0.32)',
          }}
        >
          <span>Demo personalizat în 48h</span>
          <span>·</span>
          <span>Fără card de credit</span>
          <span>·</span>
          <span>Fără obligații</span>
        </div>
      </div>
    </section>
  )
}
