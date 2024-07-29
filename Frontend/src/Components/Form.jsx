import React, { useState } from 'react';
import "./Form.css"
import {NavLink} from "react-router-dom"
const Form = () => {
  const [formValues, setFormValues] = useState({
    Name: '',
    email: '',
    password: '',
    admin:false,
  });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(formValues)
    });
    const data = await response.json();
    console.log('Success:', data);
  };
  return (
    <>
      <div className="box">
        <div className='container' >
          <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleInputChange} name="Name" autoComplete="off" value={formValues.Name} type="text" placeholder='Enter your name' />
            <input onChange={handleInputChange} name="email" autoComplete="off" value={formValues.email} type="email" placeholder='Enter your Email' />
            <input onChange={handleInputChange} name="password" autoComplete="off" value={formValues.password} type="password" placeholder='Enter your password' />
            <label style={{ fontWeight: "100" }} name="admin" htmlfor="myCheckbox">Admin</label>
            <input onChange={handleInputChange} style={{ fontSize: "10px", fontWeight: "10" }} type="checkbox" id="myCheckbox" name="admin"  checked={formValues.admin}></input>

            <button>Click</button>
            <p>If you have already account
              <NavLink activeClassName="active" to={"/Sign"}>Sign in</NavLink>
            </p>

          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
