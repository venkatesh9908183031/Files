import React, { Component } from 'react'

export class CRDemo4 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedInn:true
    }
  }
    render() {
    return (
      <div>
        {
            this.state.isLoggedInn&&
            <div> Welcome Admin</div>
               
        
        }
      </div>
    )
  }
}

export default CRDemo4