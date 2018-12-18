import React, { useState } from 'react'
import PokemonList from './PokemonList'
import ErrorBoundary from './ErrorBoundaries'
import PokemonListItem from './PokemonListItem'
import PokemonDetail from './PokemonDetail'

function App () {

  let [selectedPokemonId, setSelectedPokemonId] = useState(1)

  return (
    <div>
      <h1>Pokemon App</h1>
      <hr/>
      {
        <ErrorBoundary fallback="Shit happens... error -.-">
          <React.Suspense fallback={<div>Loading...</div>}>
            <PokemonDetail pokemonId={selectedPokemonId}/>

            <PokemonList renderItem={({name, id}) => {
              return (
                <PokemonListItem 
                  key={id} 
                  className="pokemon-firstclass" 
                  component='li'
                  onClick={() => setSelectedPokemonId(id)}
                >
                  {name}
                </PokemonListItem>
            )
        }} />
          </React.Suspense>
        </ErrorBoundary>
      }
    </div>
  )
}

export default App
