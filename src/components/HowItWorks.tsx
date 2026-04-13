const steps = [
  {
    num: '01',
    title: 'Ne trimiți detalii despre restaurant',
    body: 'Nume, locație, meniu, câteva fotografii. Atât. Ne ocupăm noi de restul.',
  },
  {
    num: '02',
    title: 'Construim un demo personalizat în 24–48h',
    body: 'Primești un link cu site-ul tău real, complet funcțional — înainte să semnezi orice.',
  },
  {
    num: '03',
    title: 'Îl lansăm și începi să primești rezervări',
    body: 'Noi gestionăm partea tehnică. Tu te concentrezi pe ceea ce faci cel mai bine — mâncarea.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="proces"
      style={{ padding: '100px 5vw', background: 'var(--cream)' }}
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
          Cum funcționează
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'var(--green)',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: 72,
            maxWidth: 480,
          }}
        >
          Simplu. Rapid.<br />Fără bătăi de cap.
        </h2>

        {/* Steps grid — becomes column on mobile via CSS */}
        <div className="simedrea-steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="simedrea-step-item">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3.8rem',
                  color: 'rgba(10,61,51,0.09)',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 20,
                  userSelect: 'none',
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--green)',
                  fontWeight: 500,
                  marginBottom: 12,
                  lineHeight: 1.4,
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

      <style>{`
        .simedrea-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .simedrea-step-item {
          padding-right: 40px;
          border-right: 1px solid rgba(10,61,51,0.1);
          padding-left: 0;
        }
        .simedrea-step-item:last-child {
          border-right: none;
          padding-right: 0;
        }
        .simedrea-step-item:not(:first-child) {
          padding-left: 40px;
        }

        @media (max-width: 768px) {
          .simedrea-steps-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .simedrea-step-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(10,61,51,0.1);
            padding: 0 0 36px 0 !important;
            margin-bottom: 36px;
          }
          .simedrea-step-item:last-child {
            border-bottom: none !important;
            margin-bottom: 0;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
