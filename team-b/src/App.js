import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import './App.css';

const initialMembers = [
  {
    id: uuid(),
    fullName: "Chioma",
    email: "chi@gmail.com",
    role: "software engineer"
  },
  {
    id: uuid(),
    fullName: "Evans",
    email: "evans@gmail.com",
    role: "ux engineer"
  }
]


function App() {

  const [ members, setMembers ] = useState(initialMembers);

  useEffect(() => {
    setMembers(members)
  }, [members])
  
  return (
    <div className="App">
      {
        members.map(m => {
          return <div key={m.id}>
            <h3>{m.fullName}</h3>
            <h4>{m.email}</h4>
            <h4>{m.role}</h4>
          </div>
        })
      }
    </div>
  );
}

export default App;
