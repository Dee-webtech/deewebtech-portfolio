import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormState {
  firstName: string
  lastName: string
  brand: string
  email: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', brand: '', email: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ firstName: '', lastName: '', brand: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8, color: '#f0ece4',
    fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ background: '#1a1714', padding: '96px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            position: 'relative', overflow: 'hidden',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 18, padding: '56px 52px',
          }}>

          {/* Watermark DT logo behind the form — matches your screenshot */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none', zIndex: 0, userSelect: 'none',
          }}>
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 900,
              fontSize: 'clamp(10rem, 28vw, 18rem)',
              letterSpacing: '-0.05em', lineHeight: 1,
              color: 'rgba(232,124,30,0.06)',
              display: 'flex',
            }}>
              <img
              src="/dee-logo.png"        
              alt="Developer Logo"
              style={{ height: 500, width: 'auto', display: 'block' }}
            />
            </span>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800, textAlign: 'center', marginBottom: 10,
            }}>
              Have a Project in Mind?<br />Tell me about it.
            </h2>
            <p style={{ color: '#8a8078', textAlign: 'center', marginBottom: 44, fontSize: '0.95rem' }}>
              I'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit}>
              {/* First + Last name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="form-row">
                <input
                  style={fieldStyle} type="text" placeholder="First Name" required
                  value={form.firstName} onChange={update('firstName')}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,124,30,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <input
                  style={fieldStyle} type="text" placeholder="Last Name" required
                  value={form.lastName} onChange={update('lastName')}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,124,30,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>

              <input
                style={{ ...fieldStyle, marginBottom: 14 }}
                type="text" placeholder="Have an existing company? Type it here..."
                value={form.brand} onChange={update('brand')}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,124,30,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />

              <input
                style={{ ...fieldStyle, marginBottom: 14 }}
                type="email" placeholder="Email Address" required
                value={form.email} onChange={update('email')}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,124,30,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />

              <textarea
                style={{ ...fieldStyle, marginBottom: 22, minHeight: 130, resize: 'none' }}
                placeholder="Type your message..." required
                value={form.message} onChange={update('message')}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(232,124,30,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />

              <button type="submit" style={{
                width: '100%', padding: '15px',
                background: '#E87C1E', color: '#fff',
                fontWeight: 700, fontSize: '0.95rem',
                border: 'none', borderRadius: 8,
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                {sent ? 'Message Recieved! I\'ll get back to you in a bit.' : 'Submit'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
          #contact > div > div { padding: 36px 22px !important; }
        }
      `}</style>
    </section>
  )
}