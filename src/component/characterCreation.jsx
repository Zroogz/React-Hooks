import { useState } from 'react'
import { containerStyle, inputStyle } from '../styles/shared-styles'

const CharacterCreation = () => {
    const [characterName, setCharacterName] = useState('')
    const [level, setLevel] = useState(1)
    const [isWarrior, setIsWarrior] = useState(false)

    return (
        <div className="character-creation" style={containerStyle}>
            <h2>Create Your Character</h2>
            <input 
                type="text"
                style={inputStyle}
                value={characterName} 
                onChange={({ target }) => setCharacterName(target.value)}
                placeholder="Enter character name"
            />
            <input 
                type="number"
                style={inputStyle}
                value={level} 
                onChange={({ target }) => setLevel(parseInt(target.value))}
                placeholder="Starting level"
            />
            <label style={inputStyle}>
                <input 
                    type="checkbox"
                    checked={isWarrior}
                    onChange={({ target }) => setIsWarrior(target.checked)}
                />
                Warrior Class
            </label>
            <p>Preview: {characterName || 'Unknown'} (Level {level}) - {isWarrior ? 'Warrior' : 'Mage'}</p>
        </div>
    )
}

export default CharacterCreation