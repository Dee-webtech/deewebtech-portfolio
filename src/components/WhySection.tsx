import { motion } from 'framer-motion'

const CHECKS = [
  'Performance & Speed Optimized',
  'Easy to Manage',
  'User-Focused Design',
]

export default function WhySection() {
  return (
    <section style={{ background: '#0e0c09', padding: '96px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 64 }} className="why-imgs">
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=480&fit=crop&q=80"
              alt="Analytics dashboard"
              style={{ width: '100%', height: 280, objectFit: 'cover' }}
            />
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=480&fit=crop&q=80"
              alt="SEO results"
              style={{ width: '100%', height: 280, objectFit: 'cover' }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>

          <p style={{ color: '#E87C1E', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            Why Work With Me
          </p>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 800, lineHeight: 1.15, marginBottom: 20, maxWidth: 620,
          }}>
            I Deliver Websites That Work While You Sleep.
          </h2>

          <p style={{ color: '#b0a898', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: 32, maxWidth: 620 }}>
            Every project is approached with attention to client needs, thoughtful design, and a commitment to delivering something that truly represents your brand.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CHECKS.map(c => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: '1rem', fontWeight: 500 }}>
                <span style={{ color: '#E87C1E', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                {c}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .why-imgs { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}