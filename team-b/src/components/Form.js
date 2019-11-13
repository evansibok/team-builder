import React, { useState } from "react";
import uuid from "uuid";

const initialForm = {
  id: uuid(),
  fullName: "",
  email: "",
  role: ""
};
const Form = ({ members, initialMembers }) => {
  console.log(members);

  const [form, setForm] = useState({});

  const changeHandler = evt => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    });
  };

  const submitHandler = evt => {
    evt.preventDefault();
    initialMembers.concat(form);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Full Name:
          <input type="text" name="fullName" onChange={changeHandler} />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={changeHandler} />
        </label>
        <br />
        <br />
        <label>
          Role:
          <input type="text" name="role" onChange={changeHandler} />
        </label>
        <br />
        <br />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default Form;
