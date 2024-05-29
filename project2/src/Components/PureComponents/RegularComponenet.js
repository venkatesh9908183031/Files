import React, { Component } from 'react'

export class RegularComponenet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'John'
    }
  }
  componentDidMount()
  {
    setInterval(()=>{
        this.setState({name:'John'})
    },2000)
  }
    render() {
        console.log('-------------Regular Component--------------------')
    return (
      <div>RegularComponenet</div>
    )
  }
}

export default RegularComponenet