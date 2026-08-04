import { useState, useEffect } from 'react'
import { useLang } from '../i18n'
import { getEpisodes } from '../lib/supabase'

// Fallback enquanto não há episódios publicados no banco
const PLACEHOLDERS = [
  { numero: 1, titulo: 'A Trilha Perdida',    desc: 'Ricky descobre uma trilha misteriosa no bosque e convida os amigos para explorar...', color: '#C4935A' },
  { numero: 2, titulo: 'O Pico dos Segredos', desc: 'JP encontra uma caverna escondida no Pico Nevado cheia de surpresas inesperadas...', color: '#3B6FA0' },
  { numero: 3, titulo: 'A Borboleta Perdida', desc: 'Lila decide ajudar uma borboleta azul que perdeu o caminho de volta para casa...',  color: '#A8C8E8' },
]

const CHAR_COLORS = { ricky: '#C4935A', jp: '#3B6FA0', lila: '#c87dd4', rosie: '#D878B0' }

export default function Videos() {
  const { t, lang } = useLang()
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEpisodes().then(data => {
      setEpisodes(data)
      setLoading(false)
    })
  }, [])

  const published = episodes.filter(e => e.status === 'publicado')
  const showPlaceholders = !loading && published.length === 0

  const titleFor = (ep) => {
    if (lang === 'en' && ep.titulo_en) return ep.titulo_en
    if (lang === 'es' && ep.titulo_es) return ep.titulo_es
    return ep.titulo
  }

  return (
    <section className="videos" id="videos">
      <div className="container">
        <h2 className="section-title">{t.videos.title}</h2>
        <p className="section-subtitle">{t.videos.sub}</p>
        <div className="videos-grid">

          {/* Episódios reais do Supabase */}
          {published.map((ep) => (
            <div key={ep.id} className="video-card" style={{ '--ep-color': CHAR_COLORS.ricky }}>
              <div className="video-thumb">
                {ep.youtube_id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${ep.youtube_id}`}
                    title={titleFor(ep)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : ep.thumbnail_url ? (
                  <img src={ep.thumbnail_url} alt={titleFor(ep)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="video-coming-soon">
                    <span className="video-play-icon">▶</span>
                    <span>{t.videos.comingSoon}</span>
                  </div>
                )}
              </div>
              <div className="video-info">
                <span className="video-ep">T{ep.temporada} E{ep.numero}</span>
                <h3 className="video-title">{titleFor(ep)}</h3>
              </div>
            </div>
          ))}

          {/* Placeholders enquanto não há episódios */}
          {showPlaceholders && PLACEHOLDERS.map((v, i) => (
            <div key={v.numero} className="video-card" style={{ '--ep-color': v.color }}>
              <div className="video-thumb">
                <div className="video-coming-soon">
                  <span className="video-play-icon">▶</span>
                  <span>{t.videos.comingSoon}</span>
                </div>
              </div>
              <div className="video-info">
                <span className="video-ep">{t.videos.title} {i + 1}</span>
                <h3 className="video-title">{v.titulo}</h3>
                <p className="video-desc">{v.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
