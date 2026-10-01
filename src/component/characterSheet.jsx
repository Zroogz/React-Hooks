import { useState } from 'react'
import { containerStyle, inputStyle } from '../styles/shared-styles'

const CharacterSheet = () => {
    const [character, setCharacter] = useState({
        name: 'Hero',
        health: 100,
        mana: 50
    })

    const updateName = (newName) => {
        setCharacter({
            ...character,
            name: newName
        })
    }

    const takeDamage = () => {
        setCharacter({
            ...character,
            health: character.health - 10
        })
    }

    return (
        <div>
            <input 
                type="text" 
                value={character.name}
                onChange={({ target }) => updateName(target.value)}
                placeholder="Character Name"
            />
            <p>Name: {character.name}</p>
            <p>Health: {character.health}</p>
            <p>Mana: {character.mana}</p>
            <button onClick={takeDamage}>Take Damage</button>
        </div>
    )
}

export default CharacterSheet