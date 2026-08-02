import { useState } from 'react'
import { useLang } from '../i18n'

const WORLD_COLORS = {
  ricky: { color: '#C4935A', glow: 'rgba(196,147,90,0.4)' },
  jp:    { color: '#3B6FA0', glow: 'rgba(59,111,160,0.4)' },
  lila:  { color: '#c87dd4', glow: 'rgba(200,125,212,0.4)' },
  rosie: { color: '#D878B0', glow: 'rgba(216,120,176,0.4)' },
}

export default function WorldMap() {
  const { t } = useLang()
  const [active, setActive] = useState(null)
  const worlds = t.map.worlds

  const activeWorld = active ? worlds.find((w) => w.id === active) : null

  return (
    <section className="worldmap" id="mapa">
      <div className="container">
        <h2 className="section-title">{t.map.title}</h2>
        <p className="section-subtitle">{t.map.sub}</p>

        <div className="worldmap-layout">
          {/* Map image */}
          <div className="worldmap-img-wrap">
            <img
              src="/img/mapa.png"
              alt="Mapa do WOLFLAND"
              className="worldmap-img"
              draggable={false}
            />
            {/* Glow pulse per world — positioned over the map quadrants */}
            {worlds.map((w) => {
              const meta = WORLD_COLORS[w.id] || {}
              const isActive = active === w.id
              return (
                <button
                  key={w.id}
                  className={`worldmap-pin worldmap-pin--${w.id}${isActive ? ' worldmap-pin--active' : ''}`}
                  style={{ '--pin-color': meta.color, '--pin-glow': meta.glow }}
                  onClick={() => setActive(isActive ? null : w.id)}
                  aria-label={w.name}
                >
                  <span className="worldmap-pin-emoji">{w.emoji}</span>
                </button>
              )
            })}
          </div>

          {/* World cards sidebar */}
          <div className="worldmap-cards">
            {worlds.map((w) => {
              const meta = WORLD_COLORS[w.id] || {}
              const isActive = active === w.id
              return (
                <button
                  key={w.id}
                  className={`worldmap-card${isActive ? ' worldmap-card--active' : ''}`}
                  style={{ '--wc-color': meta.color, '--wc-glow': meta.glow }}
                  onClick={() => setActive(isActive ? null : w.id)}
                >
                  <span className="worldmap-card-emoji">{w.emoji}</span>
                  <div className="worldmap-card-text">
                    <strong className="worldmap-card-name">{w.name}</strong>
                    {isActive && <p className="worldmap-card-desc">{w.desc}</p>}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile description panel */}
        {activeWorld && (
          <div
            className="worldmap-desc-panel"
            style={{ '--wc-color': WORLD_COLORS[activeWorld.id]?.color }}
          >
            <span>{activeWorld.emoji}</span> {activeWorld.desc}
          </div>
        )}
      </div>
    </section>
  )
}
