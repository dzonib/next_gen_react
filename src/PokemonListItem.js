import React from 'react'

function PokemonListItem({className, component: Component = 'li', ...props}) {
  return <Component 
    className={[className, 'new-classname'].join(' ')
  } {...props} style={{cursor: 'pointer'}}/>
}

export default PokemonListItem