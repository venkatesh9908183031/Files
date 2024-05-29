import React from 'react'

function Users(props) {
    const{id,name,city}=props
  return (
    <div>
        <div>
            Id:{id}
            <br/>
            Name:{name}
            <br/>
            City:{city}
        </div>
    </div>
  )
}

export default Users