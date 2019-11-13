import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import './App.css';


import Form from './components/Form';
import MembersList from './components/MembersList';

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

  const [members, setMembers] = useState(initialMembers);

  useEffect(() => {
    setMembers(members)
  }, [members])

  return (
    <div className="App">
      <Form members={members} />
      <MembersList members={members} />
    </div>
  );
}

export default App;
