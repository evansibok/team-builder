import React from 'react'

const MembersList = ({ membersList }) => {

  console.log(membersList)
  return (
    <div>
      {
        membersList && membersList.map(m => {
          return <div key={m.id} className="member_card">
            <h3>{m.full_name}</h3>
            <h4>{m.email}</h4>
            <h4>{m.role}</h4>
          </div>
        })
      }
    </div>
  )
}

export default MembersList;