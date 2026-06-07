import { motion } from 'framer-motion'
import { PROJECTS } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Selected <span style={{ color: '#E87C1E' }}>Projects</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="proj-grid">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.live && p.live !== '#' ? p.live : undefined}
              target={p.live && p.live !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1c1916',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.25s, transform 0.25s',
                cursor: p.live && p.live !== '#' ? 'pointer' : 'default',
              }}
              whileHover={{ y: -5, borderColor: 'rgba(232,124,30,0.4)' } as any}
            >
              <div style={{ overflow: 'hidden', height: 200 }}>
                <img
                  src={p.img} alt={p.title} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                />
              </div>

              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8, color: '#f0ece4' }}>{p.title}</div>
                <div style={{ color: '#8a8078', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      padding: '4px 11px',
                      background: 'rgba(232,124,30,0.12)',
                      color: '#E87C1E', fontSize: '0.72rem', fontWeight: 600,
                      borderRadius: 4, border: '1px solid rgba(232,124,30,0.22)',
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}> 
                  {p.live && p.live !== '#' && (
                    <span style={{
                      padding: '7px 18px', background: '#E87C1E', color: '#fff',
                      fontSize: '0.78rem', fontWeight: 700, borderRadius: 6,
                    }}>
                      Live Site ↗
                    </span>
                  )}
                  {p.repo && p.repo !== '#' && (
                    
                <a      href={p.repo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        padding: '7px 18px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#c8c0b4', fontSize: '0.78rem', fontWeight: 600,
                        borderRadius: 6, textDecoration: 'none',
                        background: 'transparent',
                      }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .proj-grid { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          #projects { padding: 64px 0; }
        }
      `}</style>
    </section>
  )
}
