import React, { Component } from 'react'

export class Component1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userid:'Guest'
    }
    console.log('------------Parent Constructor-----------')
  }
  static getDerivedStateFromProps()
  {
    console.log('-------------Parent getDerivedStateFromProps----------')
    return null;
  }
  componentDidMount()
  {
    console.log('---------Parent componentDidMount--------')
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('-------------Parent shouldComponentUpdate---------')
    return true;
  }
  getSnapshotBeforeUpdate()
  {
    console.log('----------Parent getSnapshotBeforeUpdate---------')
    return null;
  }
  componentDidUpdate()
  {
    console.log('--------------Parent componentDidUpdate---------')
  }
  updateUser=()=>
  {
    this.setState({userid:'Admin'})
  }
    render() {
        console.log('-------------Parent render------------')
    return (
      <div>Component1
        <h1>{this.state.userid}</h1>
        <br/>
        <button onClick={this.updateUser}>Change UserId</button>
      </div>
    )
  }
}

export default Component1