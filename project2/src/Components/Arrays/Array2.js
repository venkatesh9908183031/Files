import React, { Component } from 'react'

export class Array2 extends Component {
  render() {
    const Users=[
        {id:1,name:'Venkey',City:'Kotakonda'},
        {id:2,name:'Balappa',City:'Kotakonda'},
        {id:3,name:'Saraswathi',City:'Kotakonda'},
        {id:4,name:'Venkatesh',City:'Kotakonda'},
        {id:5,name:'Venkat',City:'Kotakonda'}
    ]
    return (
      <div>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr className='table-danger'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    Users.map((x,i)=>
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.City}</td>
                    </tr>)
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default Array2