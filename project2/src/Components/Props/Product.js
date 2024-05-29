import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        <h1>
            Id:{this.props.id}<br/>
            Name:{this.props.name}<br/>
            Price:{this.props.price}
        </h1>
      </div>
    )
  }
}

export default Product