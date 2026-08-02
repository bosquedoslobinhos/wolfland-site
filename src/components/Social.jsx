import { useLang } from '../i18n'

const SOCIAL_META = [
  { platform: 'YouTube',   icon: '▶', handle: '@WolflandBosqueDosLobinhos', color: '#ff5252', scene: '/img/cenarios/ricky-panorama.png', href: 'https://www.youtube.com/@WolflandBosqueDosLobinhos' },
  { platform: 'Instagram', icon: '◈', handle: '@wolflandbosquedoslobinhos',  color: '#e1306c', scene: '/img/cenarios/lila-panorama.png',  href: 'https://instagram.com/wolflandbosquedoslobinhos' },
  { platform: 'TikTok',   icon: '♪', handle: '@wolflandbosquedoslobinhos',  color: '#69C9D0', scene: '/img/cenarios/jp-panorama.png',    href: 'https://tiktok.com/@wolflandbosquedoslobinhos' },
]

export default function Social() {
  const { t } = useLang()
  const socials = t.social.socials

  return (
    <section className="social" id="social">
      <div className="container">
        <h2 className="section-title">{t.social.title}</h2>
        <p className="section-subtitle">{t.social.sub}</p>
        <div className="social-cards">
          {SOCIAL_META.map((meta, i) => {
            const text = socials[i] || {}
            return (
              <a
                key={meta.platform}
                href={meta.href}
                target="_blank"
                rel="noreferrer"
                className="social-card"
                style={{ '--sc-color': meta.color }}
              >
                <div className="social-card-bg" style={{ backgroundImage: `url(${meta.scene})` }} />
                <div className="social-card-overlay" />
                <div className="social-card-content">
                  <span className="social-card-icon">{meta.icon}</span>
                  <h3 className="social-card-platform">{meta.platform}</h3>
                  <p className="social-card-handle">{meta.handle}</p>
                  <p className="social-card-desc">{text.desc || ''}</p>
                  <span className="social-card-cta">{text.cta || ''} →</span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
