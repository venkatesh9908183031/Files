import React, { Component } from 'react'

export class Produt2 extends Component {
  render() {
    const{id,name}=this.props
    return (
      <div>
        Id:{id}
        <br/>
        Name:{name}
      </div>
    )
  }
}

export default Produt2
