export default function CharacterCard({ char, onClick, verMais = 'Ver mais →' }) {
  return (
    <div
      className="char-card"
      style={{
        '--card-bg': char.cardBg,
        '--card-border': char.borderColor,
        '--card-color': char.color,
        '--card-color-light': char.colorLight,
        '--tag-bg': char.tagBg,
        '--tag-color': char.tagColor,
      }}
      onClick={() => onClick(char)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(char)}
      aria-label={`${verMais} ${char.name}`}
    >
      <div className="char-img-wrap">
        <img src={char.img} alt={char.name} className="char-img" />
      </div>
      <div className="char-body">
        <span className="char-tag">{char.tag}</span>
        <h3 className="char-name">{char.name}</h3>
        <p className="char-role">{char.role}</p>
        <p className="char-desc">{char.desc}</p>
        <p className="char-place">
          {char.placeEmoji} {char.place}
        </p>
        <span className="char-more-btn">{verMais}</span>
      </div>
    </div>
  )
}
