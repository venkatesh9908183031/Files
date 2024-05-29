import axios from 'axios'
import React, { Component } from 'react'

export class Edit extends Component {
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
    axios.post('https://reqres.in/api/users',JSON.stringify(this.state))
    .then(result=>{
      console.log(result)
      if(result.status==201)
      {
        alert('User Record Updated Successfully!')
        window.location.href='../'
      }
      else{
        alert('Failed to Insert!')
      }
    })
  }
  componentDidMount()
  {
    let _id=window.location.pathname.split('/')[2]
    this.setState({id:_id})
    axios.get('https://reqres.in/api/users/'+_id).then(res=>{
      console.log(res.data.data)
      this.setState({
        first_name:res.data.data.first_name,
        last_name:res.data.data.last_name,
        email:res.data.data.email
      })
    })
  }
  render() {
    const{first_name,last_name,email}=this.state
    return (
      <div className='container'>
        <div className='container mt-3 alert alert-success'>
          <h1> Edit User</h1>
        </div>
        <form onSubmit={this.submitHandler}>
          <div className='row'>
            <div className='col'>
              <input type='text' name='first_name' className='form control' 
              placeholder='Enter first name' defaultValue={first_name} onChange={this.changeHandler}/>
            </div>
            <div className='col'>
              <input type='text' name='last_name' className='form control' 
              placeholder='Enter last name' defaultValue={last_name} onChange={this.changeHandler}/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <input type='text' name='email' className='form control' 
              placeholder='Enter E-mail' defaultValue={email} onChange={this.changeHandler}/>
            </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <button className='btn btn-success'>Update User</button>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Edit