import React, { Component } from 'react'

export class Array1 extends Component {
  render() {
    const courselist=["c","C++","Java","React","SQL"]
    return (
      <div>
        <ol>
            {
                courselist.map((x,i)=>
                <li key={i}>{x}</li>)
            }
        </ol>
      </div>
    )
  }
}

export default Array1