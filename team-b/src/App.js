import React, { useState } from 'react';
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
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
