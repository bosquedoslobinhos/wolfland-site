import { useLang } from '../i18n'

const STATS = [
  { num: '4', key: 'stat1' },
  { num: '4', key: 'stat2' },
  { num: '∞', key: 'stat3' },
  { num: '1', key: 'stat4' },
]

export default function About() {
  const { t } = useLang()

  return (
    <section className="about" id="sobre">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="about-text">{t.about.text}</p>
        <div className="about-stats">
          {STATS.map((s) => (
            <div key={s.key} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{t.about[s.key]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
