import React from 'react'

function PropsDemo(props) {
  return (
    <div>
        <h1>Id:{props.id}</h1>
        <br/>
        <h2>Name:{props.name}</h2>
    </div>
  )
}

export default PropsDemo