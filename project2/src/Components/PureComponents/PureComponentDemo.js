import React, { Component, PureComponent} from 'react'

export class PureComponentDemo extends PureComponent {
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
        console.log('-------------Pure Component--------------------')
    return (
      <div>Pure Component</div>
    )
  }
}

export default PureComponentDemo