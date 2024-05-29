import React, { Component } from 'react'

export class CRDemo2 extends Component {
    constructor(props) {
    super(props)

    this.state = {
        isLoggedinn:true
    }
    }
    render() {
        let username;
        if(this.state.isLoggedinn)
      {
        username="Admin"
      }
      else{
        username="Guest"
      }
        return (
        <div>
            Welcome,{username}
        </div>
        )
    }
}



export default CRDemo2