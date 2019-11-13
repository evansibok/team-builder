import React, { useState, useEffect } from 'react';
import './App.css';

const initialMembers = [
  {
    fullName: "Chioma",
    email: "chi@gmail.com",
    role: "software engineer"
  },
  {
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
          return <div>
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
