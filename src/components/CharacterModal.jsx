import { useEffect } from 'react'

export default function CharacterModal({ char, onClose, labels = {} }) {
  const { habilidade = '✨ Habilidade', personalidade = '💫 Personalidade', episodio = '🎬 Episódio' } = labels

  // Lock body scroll + ESC to close
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!char) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={char.name}
    >
      <div
        className="modal-card"
        style={{ '--card-color': char.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="✕">✕</button>

        {/* Header: image + name */}
        <div className="modal-header">
          <div className="modal-img-wrap">
            <img src={char.img} alt={char.name} className="modal-img" />
          </div>
          <div className="modal-header-info">
            <span
              className="char-tag"
              style={{ '--tag-bg': char.tagBg, '--tag-color': char.tagColor }}
            >
              {char.tag}
            </span>
            <h2 className="modal-name">{char.name}</h2>
            <p className="modal-role">{char.role}</p>
            <p className="modal-place">
              {char.placeEmoji} {char.place}
            </p>
          </div>
        </div>

        {/* Long description */}
        <p className="modal-longdesc">{char.longDesc}</p>

        {/* Details grid */}
        <div className="modal-details">
          <div className="modal-detail">
            <span className="modal-detail-label">{habilidade}</span>
            <span className="modal-detail-value">{char.habilidade}</span>
          </div>
          <div className="modal-detail">
            <span className="modal-detail-label">{personalidade}</span>
            <span className="modal-detail-value">{char.personalidade}</span>
          </div>
          <div className="modal-detail">
            <span className="modal-detail-label">{episodio}</span>
            <span className="modal-detail-value">{char.episodio}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
