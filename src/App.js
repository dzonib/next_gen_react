import React from 'react'
import PokemonListItem from './PokemonListItem'

const dummyData = [
  {name: 'Pikachu'},
  {name: 'Bulbasaur'},
  {name: 'Charmander'},
]

function App() {
  return (
    <div>
      {
      [...dummyData, {name:"craposaur"}]
        .filter(pokemon => !pokemon.name.toLowerCase().includes('pika'))
        .map( ({name}) => {
        return (
          <PokemonListItem key={name} className="pokemon-firstclass" component='h1'>
            {name}
          </PokemonListItem>
        )
      })
      }
    </div>
  )
}

export default App