import React, { Component } from 'react'

export class State2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id:3,name:'Dagrogon',city:'Hell'
    }
  }
    render() {
        const{id,name,city}=this.state
    return (
      <div>
        Id:{id}
        <br/>
        Name:{name}
        <br/>
        City:{city}
      </div>
    )
  }
}

export default State2