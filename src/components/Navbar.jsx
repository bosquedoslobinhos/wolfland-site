import { useState, useEffect, useRef } from 'react'
import { useLang, translations } from '../i18n'

const LANGS = ['pt', 'en', 'es']

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [hidden, setHidden] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [langOpen])

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      <a href="#hero" className="nav-logo">
        <img src="/img/logo.png" alt="WOLFLAND" height="44" />
      </a>

      <ul className="nav-links">
        <li><a href="#sobre">{t.nav.sobre}</a></li>
        <li><a href="#mapa">{t.nav.mapa}</a></li>
        <li><a href="#personagens">{t.nav.personagens}</a></li>
        <li><a href="#videos">{t.nav.episodios}</a></li>
      </ul>

      <div className="nav-right">
        {/* Language switcher */}
        <div
          className="lang-switcher"
          onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen) }}
        >
          <button className="lang-btn" aria-label="Idioma">
            {translations[lang].flag} {translations[lang].lang.toUpperCase()}
            <span className="lang-chevron">{langOpen ? '▲' : '▼'}</span>
          </button>
          {langOpen && (
            <div className="lang-dropdown">
              {LANGS.map((l) => (
                <button
                  key={l}
                  className={`lang-option${l === lang ? ' lang-option--active' : ''}`}
                  onClick={() => { setLang(l); setLangOpen(false) }}
                >
                  {translations[l].flag} {translations[l].label}
                </button>
              ))}
            </div>
          )}
        </div>

        <a href="#newsletter" className="nav-cta">{t.nav.seguir}</a>
      </div>
    </nav>
  )
}
