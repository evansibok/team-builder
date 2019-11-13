import React, { useState } from "react";
import uuid from "uuid";

const initialForm = {
  full_name: "",
  email: "",
  role: ""
};

const Form = ({ membersList, setMembersList }) => {
  const [form, setForm] = useState(initialForm);

  const changeHandler = evt => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    });
  };

  const submitHandler = evt => {
    evt.preventDefault();
    const newMember = {
      id: uuid(),
      full_name: form.full_name,
      email: form.email,
      role: form.role
    };
    const newMembersList = membersList.concat(newMember);
    setMembersList(newMembersList);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Full Name:
          <input type="text" name="full_name" onChange={changeHandler} />
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
