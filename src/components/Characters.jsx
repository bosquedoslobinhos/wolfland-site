import { useState } from 'react'
import { characters } from '../data/characters'
import CharacterCard from './CharacterCard'
import CharacterModal from './CharacterModal'
import { useLang } from '../i18n'

export default function Characters() {
  const [selected, setSelected] = useState(null)
  const { t } = useLang()

  return (
    <section className="characters" id="personagens">
      <div className="container">
        <h2 className="section-title">{t.characters.title}</h2>
        <p className="section-subtitle">{t.characters.sub}</p>
        <div className="chars-grid">
          {characters.map((char) => (
            <CharacterCard
              key={char.id}
              char={char}
              onClick={setSelected}
              verMais={t.characters.verMais}
            />
          ))}
        </div>
      </div>

      {selected && (
        <CharacterModal
          char={selected}
          onClose={() => setSelected(null)}
          labels={t.characters.modal}
        />
      )}
    </section>
  )
}
