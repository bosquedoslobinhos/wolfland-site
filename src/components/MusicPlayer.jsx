import { useState, useRef } from 'react'

// Coloque o caminho do arquivo de áudio aqui quando o tema estiver pronto:
// Ex: const AUDIO_SRC = '/audio/wolfland-tema.mp3'
const AUDIO_SRC = null

export default function MusicPlayer() {
  const [expanded, setExpanded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  // Teaser: sem áudio ainda
  if (!AUDIO_SRC) {
    return (
      <div className={`music-player${expanded ? ' music-player--expanded' : ''}`}>
        <button
          className="music-toggle"
          onClick={() => setExpanded(!expanded)}
          aria-label="Tema musical"
          title="Tema musical"
        >
          🎵
        </button>
        {expanded && (
          <div className="music-info">
            <span className="music-title">Tema do Wolfland</span>
            <span className="music-status">Em breve 🐾</span>
          </div>
        )}
      </div>
    )
  }

  // Player completo quando houver áudio
  return (
    <div className={`music-player${expanded ? ' music-player--expanded' : ''}`}>
      <audio ref={audioRef} src={AUDIO_SRC} loop />
      <button
        className="music-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-label="Tema musical"
      >
        🎵
      </button>
      {expanded && (
        <div className="music-info">
          <span className="music-title">Tema do Wolfland</span>
          <button className="music-play-btn" onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Tocar'}>
            {playing ? '⏸' : '▶'}
          </button>
        </div>
      )}
    </div>
  )
}
