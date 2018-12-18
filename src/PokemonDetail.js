import React from 'react'
import {unstable_createResource as createResource} from 'react-cache'
import axios from 'axios'

let PokemonResource = createResource(
// fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
  async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  console.log(res.data.abilities[0].ability.name)
  return res.data
})

function PokemonDetail({pokemonId: id}) {
  return <article>
    { PokemonResource.read(id).name }
  </article>
}

export default PokemonDetail