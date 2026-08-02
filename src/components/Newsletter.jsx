import { useState } from 'react'
import { useLang } from '../i18n'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error
  const { t } = useLang()
  const n = t.newsletter

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) { setStatus('error'); return }
    // TODO: integrar com Mailchimp / ConvertKit / Brevo
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 6000)
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-bg" style={{ backgroundImage: "url('/img/cenarios/rosie-panorama.png')" }} />
      <div className="newsletter-overlay" />

      <div className="container newsletter-inner">
        <div className="newsletter-stamp">🐾</div>
        <h2 className="section-title newsletter-title">{n.title}</h2>
        <p className="newsletter-sub">
          {n.sub}<br />
          <span className="newsletter-hint">{n.hint}</span>
        </p>

        {status === 'success' ? (
          <div className="newsletter-success">
            <span className="newsletter-success-icon">🎉</span>
            <p>{n.success}</p>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className={`newsletter-input${status === 'error' ? ' newsletter-input--error' : ''}`}
              placeholder={n.placeholder}
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
              aria-label={n.placeholder}
            />
            <button type="submit" className="btn btn-primary newsletter-btn">
              {n.cta}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="newsletter-error">{n.error}</p>
        )}

        <div className="newsletter-chars">
          {['ricky', 'jp', 'lila', 'rosie'].map((c) => (
            <img key={c} src={`/img/${c}.jpeg`} alt={c} className="newsletter-char-thumb" />
          ))}
        </div>
      </div>
    </section>
  )
}
