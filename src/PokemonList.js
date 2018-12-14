import React from 'react'
import { unstable_createResource as createResource} from 'react-cache'
import axios from 'axios'

import PokemonListItem from './PokemonListItem'


let PokemonCollectionResource = createResource(
  // fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
  async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemo/')
    return res.data.results
  }
)

function PokemonList() {
  return (
    <div>
      { PokemonCollectionResource.read()
        .map( ({name}) => {
        return (
          <PokemonListItem key={name} className="pokemon-firstclass" component='h1'>
            {name}
          </PokemonListItem>
        )
      })}
    </div>
  )
}  

export default PokemonList