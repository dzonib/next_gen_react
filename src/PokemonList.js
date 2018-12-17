import React from 'react'
import { unstable_createResource as createResource} from 'react-cache'
import axios from 'axios'

import PokemonListItem from './PokemonListItem'


let PokemonCollectionResource = createResource(
  // fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
  async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return res.data.results
  }
)

function PokemonList({onSelect}) {
  return (
    <div>
      { PokemonCollectionResource.read()
        .map( ({name, url}) => {
          const id = url.split('/')[6]
        return (
          <PokemonListItem 
            key={id} 
            className="pokemon-firstclass" 
            component='li'
            onClick={() => onSelect(id)}
            >
            {name}
          </PokemonListItem>
        )
      })}
    </div>
  )
}  

export default PokemonList