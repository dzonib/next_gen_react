import React from "react"
import {unstable_createResource as createResource} from "react-cache"
import sleep from 'sleep-promise'

let Resource = createResource(async id => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  await sleep(500)
  return res.json()
})

export function Detail({pokemonId: id}) {
  let pokemon = Resource.read(id)

  return <article>{pokemon.name}</article>
}

let CollectionResource = createResource(async() => {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/")

  await sleep(1000)

  return res.json()
})

export function ListItem({
  className,
  component: Component = "li",
  ...props
}) {
  return (<Component className={["pokemon-list-item", className].join(" ")} {...props}/>)
}

export function List({renderItem}) {
  return CollectionResource
    .read()
    .results
    .map(pokemon => renderItem({
      id: pokemon
        .url
        .split("/")[6],
      ...pokemon
    }))
}

export function ListError() {
  return <span>Couldn't catch 'em all</span>
}

export function ListFallback() {
  return <span>Looing for Pokemon...</span>
}
