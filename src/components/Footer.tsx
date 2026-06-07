const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '52px 0 36px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>

        {/* Large DT logo box — matches your screenshot exactly */}
        <div style={{
          width: 100, height: 100, margin: '0 auto 36px',
          background: '#1c1916',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#E87C1E' }}>D</span>
            <span style={{ color: '#f0ece4' }}>T</span>
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 24, flexWrap: 'wrap' }}>
          {NAV.map(l => (
            <a key={l.label} href={l.href} style={{ color: '#8a8078', fontSize: '0.875rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0ece4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8a8078')}>
              {l.label}
            </a>
          ))}
        </nav>

        <p style={{ color: '#5a5450', fontSize: '0.8rem', marginBottom: 24 }}>
          Copyright © 2026 DeeWebTech | WordPress & Frontend Web Development. All Rights Reserved.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 22 }}>
          {/* GitHub */}
          <a href="#" aria-label="GitHub" style={{ color: '#6a6460', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E87C1E')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6a6460')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" style={{ color: '#6a6460', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E87C1E')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6a6460')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* Twitter / X */}
          <a href="#" aria-label="Twitter" style={{ color: '#6a6460', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E87C1E')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6a6460')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" style={{ color: '#6a6460', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E87C1E')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6a6460')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}