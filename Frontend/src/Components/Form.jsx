import React, { useState } from 'react';
import "./Form.css";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    gender: '' // Manage gender as part of the form values
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value // This will update name, email, password, and gender
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Uncomment and adjust as needed
    // const response = await fetch('http://localhost:3000/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formValues)
    // });
    // const data = await response.json();
    // if (data.status === "ok") {
    //   setStatus("Registered Successfully");
    // }
    // if (data.status === "error") {
    //   setStatus("Password is incorrect");
    // }
    // if (data.status === "email") {
    //   setStatus("Email already exists");
    // }
    console.log(formValues);
  };

  return (
    <div className="box">
      <div className='container'>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            name="name"
            autoComplete="off"
            value={formValues.name}
            type="text"
            placeholder='Enter your name'
          />
          <input
            onChange={handleInputChange}
            name="email"
            autoComplete="off"
            value={formValues.email}
            type="email"
            placeholder='Enter your email'
          />
          <input
            onChange={handleInputChange}
            name="password"
            autoComplete="off"
            value={formValues.password}
            type="password"
            placeholder='Enter your password'
          />
          <hr />
          <div className='form-group'>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formValues.gender === "Male"}
              onChange={handleInputChange}
              style={{ width: "20px" }}
            />
            <label htmlFor="male" style={{ fontWeight: 'bold' }}>Male</label><br />
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formValues.gender === "Female"}
              onChange={handleInputChange}
              style={{ width: "20px" }}
            />
            <label htmlFor="female" style={{ fontWeight: 'bold' }}>Female</label><br />
          </div>
          <hr />
          <button type="submit">Submit</button>
          <p>If you have an account
            <NavLink to="/login"> login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
