import { motion } from 'framer-motion'

export default function QuoteSection() {
  return (
    <section style={{ background: '#111111', padding: '88px 28px', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}>

        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: '#E87C1E',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          fontSize: '1.5rem', color: '#fff', fontWeight: 900, lineHeight: 1,
          paddingBottom: 4,
        }}>"</div>

        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.15rem, 2.2vw, 1.55rem)',
          fontStyle: 'italic', lineHeight: 1.65,
          maxWidth: 740, margin: '0 auto 24px',
          color: '#f0ece4',
        }}>
          "A great website doesn't just look beautiful. It guides visitors, builds trust, and turns interest into action."
        </p>

        <p style={{ color: '#E87C1E', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.06em' }}>
          Dee WebTech
        </p>
      </motion.div>
    </section>
  )
}