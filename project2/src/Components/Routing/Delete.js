import React, { Component } from 'react'

export class Delete extends Component {
  componentDidMount()
  {
    var id=window.location.pathname.split('/')[2]
    console.log(id)
    fetch('https://reqres.in/api/users/'+id,{
      method:'DELETE'
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