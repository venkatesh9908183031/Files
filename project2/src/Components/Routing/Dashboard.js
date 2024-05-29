import React, { Component } from 'react'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[]
    }
  }
  componentDidMount()
  {
    fetch('https://reqres.in/api/users',{
    method:'GET'
  }).then(result=>{
    return result.json()
  }).then(res=>{
    console.log(res.data)
    this.setState({users:res.data})
  })
}
  render() {
    return (
      <div className='container mt-3'>
        <div className='container'>
          <a href='/add' className='btn btn-danger'>Add User</a>
        </div>
        <table
        className='mt-5 table table-bordered table-hover'>
          <thead>
            <tr className='table-dark'>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users?this.state.users.map((x,i)=>
              <tr key={i}>
                <td>{x.id}</td>
                <td>{x.first_name} {x.last_name}</td>
                <td>{x.email}</td>
                <td>
                  <a href={`edit/${x.id}`} className='btn btn-warning'>Edit</a>
                  &nbsp;
                  <a href={`delete/${x.id}`} className='btn btn-success'>Delete</a>
                </td>
              </tr>):null
              }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard