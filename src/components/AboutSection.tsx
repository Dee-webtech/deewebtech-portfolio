import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>

          <p style={{ color: '#E87C1E', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            Who You're Working With
          </p>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800, lineHeight: 1.12, marginBottom: 28,
          }}>
            Not Just a Developer — A Long-Term Growth Partner
          </h2>

          <p style={{ color: '#b0a898', fontSize: '1rem', lineHeight: 1.85, marginBottom: 18, }}>
            I'll make it clear! I don't believe in building websites that just "look good." I build digital platforms that solve real problems such as slow load times, poor structure, low conversions, and weak search visibility. Before you hit that <strong>"return button"</strong>, consider hitting the <strong>"let's work together"</strong> button.
          </p>

          <p style={{ color: '#b0a898', fontSize: '1rem', lineHeight: 1.85, marginBottom: 36,}}>
            With a strong foundation in frontend development and WordPress, I focus on performance, structure, and scalability — so your website works as hard as you do.
          </p>

          <a href="#contact" style={{
            display: 'inline-block', padding: '14px 30px',
            background: '#E87C1E', color: '#fff',
            fontWeight: 700, fontSize: '0.9rem', borderRadius: 7,
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  )
}