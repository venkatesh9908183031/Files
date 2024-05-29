import React from 'react'
import'./Mystyles.css'
export default function CSSDemo(props) {
    const myclass=props.status?'online':'offline'
  return (
    <div>
        <h1 className={myclass}>Sample Text</h1>
    </div>
  )
}