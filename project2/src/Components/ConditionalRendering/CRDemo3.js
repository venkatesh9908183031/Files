import React, { Component } from 'react'

export class CRDemo3 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedInn:false
    }
  }
    render() {
    return (
        <div>
            {
                this.state.isLoggedInn?
                <h1>Welcome Admin</h1>:
                    
                
                <h1>Welcome Guest</h1>
                    
            
            }

        </div>
    )
  }
}

export default CRDemo3