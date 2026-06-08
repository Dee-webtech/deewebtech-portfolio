import { motion } from 'framer-motion'

const TECH = [
  {
    category: 'WordPress',
    skills: ['WooCommerce', 'Custom Themes', 'Elementor', 'Gutenberg Blocks', 'Plugin Dev', 'Rank Math'],
  },
  {
    category: 'Frontend',
    skills: ['ReactJS', 'Tailwind CSS', 'TypeScript', 'HTML5', 'JavaScript'],
  },
  {
    category: 'Tools',
    skills: ['WordPress', 'Github', 'Vercel', 'Figma', 'Framer', 'NodeJS'],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>

      <img
        src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1400&h=700&fit=crop&q=80"
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(14,12,9,0.80)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: '#E87C1E', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
            Expertise
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Tech <span style={{ color: '#E87C1E' }}>Stack</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tech-grid">
          {TECH.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: 'rgba(26,23,18,0.88)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '28px 26px',
                backdropFilter: 'blur(10px)',
              }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f0ece4', marginBottom: 18 }}>{g.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                {g.skills.map(s => (
                  <span key={s} style={{
                    padding: '6px 14px',
                    background: '#E87C1E',
                    color: '#fff',
                    fontSize: '0.78rem', fontWeight: 600,
                    borderRadius: 20,
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}