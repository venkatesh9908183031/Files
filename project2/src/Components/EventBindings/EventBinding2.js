import React, { Component } from 'react'

export class EventBinding2 extends Component {
    constructor(props){
        super(props)

        this.state={
            userid:'Guest'
        }
    }
    changeUserId=()=>{
        this.setState({userid:'Admin'})
    }
  render() {
    return (
      <div>
        <h1>Welcome,{this.state.userid}</h1>
        <button onClick={this.changeUserId}>Change User Id</button>
      </div>
    )
  }
}

export default EventBinding2