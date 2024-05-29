import React, { Component } from 'react'

export class Edit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id:'',first_name:'',last_name:'',email:''
    }
  }
  componentDidMount()
  {
    var id=window.location.pathname.split('/')[2]
    console.log(id)
    fetch('https://reqres.in/api/users/'+id,{
      method:'GET'
    }).then(result=>{
      return result.json()
    })
    .then(res=>{
      console.log(res.data)
      this.setState({id:res.data.id,first_name:res.data.first_name,last_name:res.data.last_name,email:res.data.email})
    })
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=(e)=>{
  e.preventDefault();
  console.log(this.state)
  fetch('https://reqres.in/api/users/'+this.state.id,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(this.state)
  }).then(result=>{
    if(result.status==200)
    {
      alert('User Data Updated Successfully')
      window.location.href='../'
    }
  })
  }
  render() {
    return (
      <div className='container'>
        <div className='alert alert-success mt-5'>
          <h1>Edit User</h1>
        </div>
        <form className='container mt-3'>
          <div className='row'>
            <div className='col'>
              <input type="text" name="first_name" className='form-control' placeholder='Enter First Name'
               defaultValue={this.state.first_name} onChange={this.changeHandler}/>
            </div>
            <div className='col'>
              <input type="text" name="last_name" className='form-control' placeholder='Enter Last Name' 
              defaultValue={this.state.last_name} onChange={this.changeHandler}/>
            </div>  
            <div className='col'>
              <input type="text" name="email" className='form-control' placeholder='Enter Email' 
              defaultValue={this.state.email} onChange={this.changeHandler}/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
            <button type="submit" className='btn btn-danger'>Update User</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit
