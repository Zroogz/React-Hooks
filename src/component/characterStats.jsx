import { useState } from 'react'

import { containerStyle, buttonStyle } from '../Shared/shared-Styles.js'

const CharacterStats = () => {
  const [skillPoints, setSkillPoints] = useState(5)
  const [strength, setStrength] = useState(0)

  const increaseStat = () => {
    if (skillPoints <= 0) return

    setStrength((current) => current + 1)
    setSkillPoints((current) => current - 1)
  }

  const decreaseStat = () => {
    if (strength <= 0) return

    setStrength((current) => current - 1)
    setSkillPoints((current) => current + 1)
  }

  return (
    <div className="character-stats" style={containerStyle}>
      <h2>Character Stats</h2>
      <div>Skill Points: {skillPoints}</div>
      <div>
        <button style={buttonStyle} onClick={decreaseStat} disabled={strength <= 0}>
          -
        </button>
        <span>Strength: {strength}</span>
        <button style={buttonStyle} onClick={increaseStat} disabled={skillPoints <= 0}>
          +
        </button>
      </div>
    </div>
  )
}

export default CharacterStats