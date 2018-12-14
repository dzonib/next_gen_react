import React from 'react'
import PokemonList from './PokemonList'
import ErrorBoundary from './ErrorBoundaries'

function App () {
  return (
    <div>
      <h1>Pokemon App</h1>
      <hr/>
      {
        <ErrorBoundary fallback="Shit happens... error -.-">
          <React.Suspense fallback={<div>Loading...</div>}>
            <PokemonList />
          </React.Suspense>
        </ErrorBoundary>
      }
    </div>
  )
}

export default App
