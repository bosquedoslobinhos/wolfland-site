import { useState, useEffect } from 'react'
import { useLang } from '../i18n'

const STORAGE_KEY = 'wolfland_cookie_consent'

export default function CookieBanner() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Só mostra se o usuário ainda não aceitou
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  const c = t.cookies

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <p className="cookie-text">
        {c.text}{' '}
        <a href="/privacidade" className="cookie-link">{c.policy}</a>.
      </p>
      <button className="cookie-btn" onClick={accept}>
        {c.cta}
      </button>
    </div>
  )
}
