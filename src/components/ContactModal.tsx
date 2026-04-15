import { useEffect } from 'react'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (open) { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{ position: 'fixed', inset: 0, background: 'rgba(7,20,16,0.65)', backdropFilter: 'blur(6px)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: '#fff', borderRadius: 20, padding: 'clamp(36px, 6vw, 56px) clamp(28px, 5vw, 48px)', maxWidth: 460, width: '100%', textAlign: 'center' as const, position: 'relative' as const }}
      >
        <button
          onClick={onClose}
          aria-label="Închide"
          style={{ position: 'absolute' as const, top: 18, right: 18, background: 'rgba(10,61,51,0.07)', border: 'none', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', fontSize: 20, color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(10,61,51,0.13)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10,61,51,0.07)')}
        >
          ×
        </button>

        <div style={{ width: 60, height: 60, background: 'rgba(10,61,51,0.07)', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A3D33" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>

        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.65rem', color: 'var(--green)', fontWeight: 700, marginBottom: 12, lineHeight: 1.25 }}>
          Îți construim demo-ul în 48h
        </h3>

        <p style={{ fontSize: '0.93rem', color: 'var(--muted)', lineHeight: 1.72, maxWidth: 360, margin: '0 auto 28px' }}>
          Trimite-ne un email cu numele restaurantului și numărul de telefon. Atât. Noi ne ocupăm de tot ce urmează.
        </p>

        <a
          href="mailto:mihai.nicolae.simedrea@gmail.com?subject=Arată-mi cum să nu mai pierd clienți"
          style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', textDecoration: 'none', padding: '14px 32px', borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, transition: 'all 0.2s ease', marginBottom: 16 }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--green-mid)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          mihai.nicolae.simedrea@gmail.com
        </a>

        <p style={{ fontSize: 12, color: 'rgba(10,61,51,0.38)', margin: 0 }}>
          Fără obligații. Fără card.
        </p>
      </div>
    </div>
  )
}
