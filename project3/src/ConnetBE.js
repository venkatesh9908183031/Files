import axios from 'axios';
import React, { useState } from 'react';

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '300px' }}>
      <h3>{user.name}</h3>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

function ConnetBE() {
  const [userData, setUserData] = useState([]);
  const [msg, setMsg] = useState('');

  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch(() => {
        console.log('Unable to Connect');
        setMsg('Unable to Connect');
      });
  };

  return (
    <div>
      <center><h1>ConnectBE</h1></center>
      <center><button onClick={getUsers}>Get User Data</button></center>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {userData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default ConnetBE;
