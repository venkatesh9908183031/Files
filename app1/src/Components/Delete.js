import axios from 'axios'
import React, { Component } from 'react'

export class Delete extends Component {
  componentDidMount()
  {
    let _id=window.location.pathname.split('/')[2]
this.setState({id:_id}) 
   axios.fetch('https://reqres.in/api/users/'+_id,{
  }).then(result=>{
    if(result.status==204)
    {
      alert('User Record Deleted Successfully!')
      window.location.href='../'
    }
  })
  }
  render() {
    return (
      <div>Delete</div>
    )
  }
}

export default Delete