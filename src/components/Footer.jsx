import { characters } from '../data/characters'
import { useLang } from '../i18n'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/img/logo.png" alt="WOLFLAND" className="footer-logo" />

        <div className="footer-chars">
          {characters.map((c) => (
            <img
              key={c.id}
              src={c.img}
              alt={c.name}
              className="footer-char-img"
              style={{ '--char-color': c.color }}
              title={c.name}
            />
          ))}
        </div>

        <p className="footer-domain">bosquedoslobinhos.com.br</p>
        <p className="footer-copy">
          © {year} WOLFLAND — Bosque dos Lobinhos. {t.footer.rights}
        </p>
        <a href="/privacidade" className="footer-privacy">{t.footer.privacy}</a>
      </div>
    </footer>
  )
}
