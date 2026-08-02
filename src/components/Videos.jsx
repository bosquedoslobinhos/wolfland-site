import { useLang } from '../i18n'

const VIDEOS = [
  { id: 1, title: 'A Trilha Perdida',   desc: 'Ricky descobre uma trilha misteriosa no bosque e convida os amigos para explorar...', color: '#C4935A' },
  { id: 2, title: 'O Pico dos Segredos', desc: 'JP encontra uma caverna escondida no Pico Nevado cheia de surpresas inesperadas...', color: '#3B6FA0' },
  { id: 3, title: 'A Borboleta Perdida', desc: 'Lila decide ajudar uma borboleta azul que perdeu o caminho de volta para casa...',  color: '#A8C8E8' },
]

export default function Videos() {
  const { t } = useLang()

  return (
    <section className="videos" id="videos">
      <div className="container">
        <h2 className="section-title">{t.videos.title}</h2>
        <p className="section-subtitle">{t.videos.sub}</p>
        <div className="videos-grid">
          {VIDEOS.map((v, i) => (
            <div key={v.id} className="video-card" style={{ '--ep-color': v.color }}>
              <div className="video-thumb">
                <div className="video-coming-soon">
                  <span className="video-play-icon">▶</span>
                  <span>{t.videos.comingSoon}</span>
                </div>
              </div>
              <div className="video-info">
                <span className="video-ep">{t.videos.title} {i + 1}</span>
                <h3 className="video-title">{v.title}</h3>
                <p className="video-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
