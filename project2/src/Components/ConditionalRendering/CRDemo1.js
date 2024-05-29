import React, { Component } from 'react'

export class CRDemo1 extends Component {
    constructor(props) {
    super(props)

    this.state = {
        isLoggedinn:true
    }
    }
    render() {
        if(this.state.isLoggedinn)
      {
        return (
        <div>
            <h1>Welcome Admin</h1>
        </div>
        )
         }
    }
}


export default CRDemo1