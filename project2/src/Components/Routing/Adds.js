import React, { Component } from 'react'

export class Adds extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first_name:'',last_name:'',email:''
    }
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=(e)=>{
  e.preventDefault();
  console.log(this.state)
  fetch('https://reqres.in/api/users/',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(this.state)
  }).then(result=>{
    if(result.status==201)
    {
      alert('User Added Successfully')
      window.location.href='./'
    }
  })
  }
  render() {
    return (
      <div className='container'>
        <div className='alert alert-success mt-5'>
          <h1>Add User</h1>
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
            <button type="submit" className='btn btn-danger'>Add User</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Adds
