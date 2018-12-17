import React, { useState } from 'react'
import PokemonList from './PokemonList'
import ErrorBoundary from './ErrorBoundaries'

function App () {

  let [selectedPokemonId, setSelectedPokemonId] = useState(1)

  return (
    <div>
      <h1>Pokemon App</h1>
      <hr/>
      <strong>selected pokemon id: {selectedPokemonId}</strong>
      {
        <ErrorBoundary fallback="Shit happens... error -.-">
          <React.Suspense fallback={<div>Loading...</div>}>
            <PokemonList onSelect={id => setSelectedPokemonId(id)}/>
          </React.Suspense>
        </ErrorBoundary>
      }
    </div>
  )
}

export default App
