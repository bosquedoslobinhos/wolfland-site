import { useEffect, useRef } from 'react'
import Stars from './Stars'
import { useLang } from '../i18n'

const CHARS = [
  { id: 'ricky', color: '#C4935A', label: 'Ricky', img: '/img/ricky.jpeg' },
  { id: 'jp',    color: '#3B6FA0', label: 'JP',    img: '/img/jp.jpeg' },
  { id: 'lila',  color: '#A8C8E8', label: 'Lila',  img: '/img/lila.jpeg' },
  { id: 'rosie', color: '#D878B0', label: 'Rosie', img: '/img/rosie.jpeg' },
]

export default function Hero() {
  const { t } = useLang()
  const bgRef = useRef(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const onScroll = () => {
      el.style.backgroundPositionY = `calc(35% + ${window.scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" ref={bgRef} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <Stars />

      <div className="hero-inner">
        <div className="hero-char-row">
          {CHARS.map((c) => (
            <div key={c.id} className="hero-char-bubble" style={{ '--char-color': c.color }}>
              <img src={c.img} alt={c.label} />
            </div>
          ))}
        </div>

        <img src="/img/logo.png" alt="WOLFLAND – Bosque dos Lobinhos" className="hero-logo" />

        <p className="hero-tagline">
          {t.hero.tagline}{' '}
          <strong>{t.hero.adventure}</strong>, <strong>{t.hero.friendship}</strong>{' '}
          e <strong>{t.hero.discoveries}</strong>!
          <span className="hero-sub">{t.hero.sub}</span>
        </p>

        <div className="hero-ctas">
          <a
            href="https://www.youtube.com/@WolflandBosqueDosLobinhos"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            {t.hero.cta1}
          </a>
          <a href="#personagens" className="btn btn-secondary" onClick={smoothTo('personagens')}>
            {t.hero.cta2}
          </a>
        </div>
      </div>

      <svg className="hero-trees" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,140 L0,70 C30,35 60,18 90,44 L120,26 L150,52 C180,9 210,0 240,26
             L270,9 L300,44 C330,0 360,0 390,26 L420,9 L450,44 C480,9 510,0 540,26
             L570,9 L600,44 C630,0 660,0 690,26 L720,9 L750,44 C780,0 810,0 840,26
             L870,9 L900,44 C930,0 960,0 990,26 L1020,9 L1050,44 C1080,0 1110,0 1140,26
             L1170,9 L1200,44 C1230,0 1260,0 1290,26 L1320,9 L1350,44
             C1380,9 1410,0 1440,26 L1440,140 Z"
          fill="#100e22" opacity="0.98"
        />
        <path
          d="M0,140 L0,96 C60,62 120,52 180,78 L240,57 L300,83 C360,44 420,48 480,74
             L540,52 L600,78 C660,44 720,48 780,74 L840,57 L900,83 C960,48 1020,44 1080,70
             L1140,52 L1200,78 C1260,52 1320,48 1380,70 L1440,57 L1440,140 Z"
          fill="#0a091a" opacity="0.88"
        />
      </svg>
      <div className="scroll-cue" aria-hidden="true">↓</div>
    </section>
  )
}
