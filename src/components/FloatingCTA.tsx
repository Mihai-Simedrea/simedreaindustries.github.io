import { useState, useEffect } from 'react'

interface FloatingCTAProps {
  onCta: () => void
}

export default function FloatingCTA({ onCta }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <button
        onClick={onCta}
        aria-label="Obține un demo gratuit"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 20,
          zIndex: 90,
          background: 'var(--orange)',
          color: '#fff',
          border: 'none',
          padding: '14px 22px',
          borderRadius: 100,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(201,99,58,0.38)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          pointerEvents: visible ? 'auto' : 'none',
          display: 'none',
        }}
        className="simedrea-float-cta"
      >
        Demo gratuit →
      </button>

      <style>{`
        @media (max-width: 768px) {
          .simedrea-float-cta {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
