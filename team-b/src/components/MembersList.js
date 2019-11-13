import React from 'react'

const MembersList = ({ members }) => {
  
  return (
    <div>
      {
        members.map(m => {
          return <div key={m.id} className="member_card">
            <h3>{m.fullName}</h3>
            <h4>{m.email}</h4>
            <h4>{m.role}</h4>
          </div>
        })
      }
    </div>
  )
}

export default MembersList;