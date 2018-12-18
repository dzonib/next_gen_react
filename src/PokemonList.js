import React from 'react'
import { unstable_createResource as createResource} from 'react-cache'
import axios from 'axios'


let PokemonCollectionResource = createResource(
  // fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
  async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return res.data.results
  }
)

function PokemonList({renderItem}) {
  return (
    <div>
      { PokemonCollectionResource.read()
        .map(pokemon => renderItem({id: pokemon.url.split('/')[6], ...pokemon}))}
    </div>
  )
}  

export default PokemonList