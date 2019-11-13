import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import './App.css';


import Form from './components/Form';
import MembersList from './components/MembersList';

const initialMembers = [
  {
    id: uuid(),
    full_name: "Chioma",
    email: "chi@gmail.com",
    role: "software engineer"
  },
  {
    id: uuid(),
    full_name: "Evans",
    email: "evans@gmail.com",
    role: "ux engineer"
  }
]


function App() {

  const [membersList, setMembersList] = useState(initialMembers);

  useEffect(() => {
    setMembersList(membersList)
  }, [membersList])

  const editHandler = () => {

  }

  return (
    <div className="App">
      <Form membersList={membersList} setMembersList={setMembersList} />
      <MembersList editHandler={editHandler} membersList={membersList} />
    </div>
  );
}

export default App;
