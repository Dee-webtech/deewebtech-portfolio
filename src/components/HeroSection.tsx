import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      <img
        src="dee-profile.png"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.75) 25%, rgba(10,8,6,0.35) 75%, rgba(10,8,6,0.15) 100%)',
      }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px',
        background: 'linear-gradient(to top, #111111, transparent)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', padding: '120px 28px 80px', width: '100%' }}>
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
            fontWeight: 900, lineHeight: 1.08,
            maxWidth: 620, marginBottom: 24, letterSpacing: '-0.02em',
          }}>
          Websites That Work While You Sleep.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          style={{ color: '#c8c0b4', fontSize: '1rem', lineHeight: 1.82, maxWidth: 500, marginBottom: 40 }}>
          Hi, I'm Delight. I help businesses and startups turn ideas into fast, scalable, and conversion-focused websites. I build responsive, SEO optimized platforms designed to attract the right audience and grow internationally. Clean code, great performance, zero confusion —{' '}
          <strong style={{ color: '#f0ece4', fontWeight: 600 }}>just results.</strong>
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45 }}
          style={{
            display: 'inline-block', padding: '15px 36px',
            background: '#E87C1E', color: '#fff',
            fontWeight: 700, fontSize: '0.95rem', borderRadius: 7,
            letterSpacing: '0.01em', transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
          View My Work
        </motion.a>
      </div>
    </section>
  )
}