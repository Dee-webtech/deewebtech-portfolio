import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROLES = [
    { title: 'AI Automation Specialist', desc: 'N8N, GHL, Make, Claude' },
  { title: 'WordPress Expert', desc: 'Custom themes, plugins & WooCommerce solutions' },
  { title: 'Frontend Engineer', desc: 'React, TypeScript & modern JS frameworks' },
  { title: 'SEO Expert', desc: 'Optimize speed, clean code, metadata, and on-page elements to improve rankings and user experience' },
]

function RoleCard({ role, index }: { role: typeof ROLES[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -70 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.18, ease: 'easeOut' }}
      style={{
        background: 'rgba(20,18,14,0.82)',
        backdropFilter: 'blur(10px)',
        borderLeft: '3px solid #E87C1E',
        padding: '18px 22px',
        borderRadius: '0 10px 10px 0',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f0ece4', marginBottom: 6 }}>
        {role.title}
      </div>
      <div style={{ fontSize: '0.85rem', color: '#b0a898', lineHeight: 1.55 }}>
        {role.desc}
      </div>
    </motion.div>
  )
}

export default function RolesSection() {
  return (
    <section style={{ background: '#1a1714', padding: '80px 0', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 28px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}
        className="roles-grid"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {ROLES.map((r, i) => (
            <RoleCard key={r.title} role={r} index={i} />
          ))}
        </div>

        <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative' }} className="roles-img">
          <img
            src="dee-workarea.png"
            alt="Delight — Developer"
            style={{ width: '100%', height: 440, objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(26,23,20,0.9) 100%)',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .roles-grid { grid-template-columns: 1fr !important; position: relative; min-height: 420px; padding: 40px 28px; }
          .roles-img { position: absolute !important; inset: 0 !important; border-radius: 0 !important; z-index: 0; opacity: 0.35; height: 100% !important; }
          .roles-img img { height: 100% !important; }
          .roles-grid > div:first-child { position: relative; z-index: 1; }
        }
      `}</style>
    </section>
  )
}