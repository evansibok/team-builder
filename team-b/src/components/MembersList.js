import React from "react";

const MembersList = ({ membersList, editHandler }) => {
  return (
    <div>
      {membersList &&
        membersList.map(m => {
          return (
            <div key={m.id}>
              <button type="submit" onClick={editHandler}>
                Edit {m.full_name}
              </button>
              <h3>{m.full_name}</h3>
              <h4>{m.email}</h4>
              <h4>{m.role}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default MembersList;
