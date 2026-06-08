import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    background: scrolled ? 'rgba(54, 52, 52, 0.94)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    transition: 'background 0.3s, backdrop-filter 0.3s',
  }

  const innerStyle: React.CSSProperties = {
    maxWidth: 1240, margin: '0 auto', padding: '0 28px',
    height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  }

  return (
    <>
      <motion.header
        style={navStyle}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div style={innerStyle}>
          <a href="#home">
            <img
              src="/dee-logo.png"        
              alt="Developer Logo"
              style={{ height: 90, width: 'auto', display: 'block' }}
            />
          </a>

          <nav style={{ display: 'flex', gap: 36 }} className="dt-desk">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: '0.9rem', fontWeight: 500, color: '#b0a898', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f0ece4')}
                onMouseLeave={e => (e.currentTarget.style.color = '#b0a898')}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="dt-desk" style={{
            padding: '10px 22px', background: '#E87C1E', color: '#fff',
            fontWeight: 600, fontSize: '0.875rem', borderRadius: 6, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Send An Email
          </a>

          <button onClick={() => setOpen(true)} className="dt-mob" aria-label="Menu" style={{
            background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, width: 44, height: 44,
            display: 'none', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 5,
          }}>
            <span style={{ width: 20, height: 2, background: '#f0ece4', borderRadius: 2, display: 'block' }} />
            <span style={{ width: 20, height: 2, background: '#f0ece4', borderRadius: 2, display: 'block' }} />
            <span style={{ width: 14, height: 2, background: '#f0ece4', borderRadius: 2, display: 'block' }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 300,
              background: 'rgba(14,12,10,0.97)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 44,
            }}>
            <button onClick={() => setOpen(false)} style={{
              position: 'absolute', top: 20, right: 20,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, width: 44, height: 44, color: '#f0ece4',
              fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>✕</button>

            {LINKS.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: '#f0ece4' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E87C1E')}
                onMouseLeave={e => (e.currentTarget.style.color = '#f0ece4')}>
                {l.label}
              </motion.a>
            ))}

            <motion.a href="#contact" onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              style={{ padding: '14px 40px', background: '#E87C1E', color: '#fff', fontWeight: 700, fontSize: '1rem', borderRadius: 8 }}>
              Send An Email
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .dt-desk { display: none !important; }
          .dt-mob { display: flex !important; }
        }
      `}</style>
    </>
  )
}