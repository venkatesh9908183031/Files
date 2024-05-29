import React, { Component } from 'react'

export class Component2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
    console.log('------------Child Constructor-----------')
  }
  static getDerivedStateFromProps()
  {
    console.log('-------------Child getDerivedStateFromProps----------')
    return null;
  }
  componentDidMount()
  {
    console.log('---------Child componentDidMount--------')
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('-------------Child shouldComponentUpdate---------')
    return true;
  }
  getSnapshotBeforeUpdate()
  {
    console.log('----------Child getSnapshotBeforeUpdate---------')
    return null;
  }
  componentDidUpdate()
  {
    console.log('--------------Child componentDidUpdate---------')
  }
  updateUser=()=>
  {
    this.setState({userid:'Admin'})
  }
    render() {
        console.log('-------------Child render------------')
    return (
      <div> 
        Component2
      </div>
    )
  }
}

export default Component2