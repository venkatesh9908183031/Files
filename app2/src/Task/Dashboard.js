import React, { Component } from 'react'
import axios from 'axios'

export class Dashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount()
    {
        axios.get('https://reqres.in/api/users/')
        .then(res=>{
            console.log(res.data.data)
            this.setState({users:res.data.data})
        })
    }
  render() {
    const{users}=this.state
    return (
      <div className='container'>
        <div className='alert alert-success'>
            <h1 style={{color:'Indigo'}}>Internet Users</h1>
        </div>
        <div className='container mt-3'>
         <h2 style={{color:'greenyellow'}}> Want to Add User</h2> 
        <a href='/add' className='btn btn-primary'> Click Here</a>
        </div>
        <table className='table table-responsive table-bordered table-hover'>
            <thead>
                <tr className='table-success'>
                    <th>Sl.No</th>
                    <th>User Name</th>
                    <th>User E-mail</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?users.map((x,i)=>
                        <tr key={i}>
                            <td>{x.id}</td>
                            <td>{x.first_name} {x.last_name}</td>
                            <td>{x.email}</td>
                            <td>
                              <a href={`edit/${x.id}`} className='btn btn-warning'>Edit</a>
                              &nbsp;
                              <a href={`delete/${x.id}`} className='btn btn-danger'>Delete</a>
                            </td>
                        </tr>
                    ):null
                }
            </tbody>

        </table>
        
      </div>
    )
  }
}

export default Dashboard