export default function Differentiator() {
  return (
    <section
      style={{
        padding: '80px 5vw',
        borderTop: '1px solid rgba(10,61,51,0.07)',
        borderBottom: '1px solid rgba(10,61,51,0.07)',
        background: 'var(--cream-light)',
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center' as const,
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3.5rem',
            color: 'rgba(201,99,58,0.25)',
            lineHeight: 0.6,
            marginBottom: 20,
            userSelect: 'none',
          }}
        >
          "
        </div>
        <blockquote
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.15rem)',
            color: 'var(--green)',
            fontWeight: 700,
            lineHeight: 1.38,
            fontStyle: 'italic',
            margin: 0,
            padding: 0,
            border: 'none',
          }}
        >
          Nu ai nevoie de cunoștințe tehnice. Ne ocupăm noi de tot.
        </blockquote>
      </div>
    </section>
  )
}
