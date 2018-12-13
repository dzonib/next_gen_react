import React from 'react'

function PokemonListItem({className, component: Component = 'li', ...props}) {
  console.log(props)
  return <Component 
    className={[className, 'new-classname'].join(' ')
  } {...props}/>
}

export default PokemonListItem