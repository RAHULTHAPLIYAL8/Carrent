import React, { useState } from 'react';
import "./Form.css"
import {NavLink} from "react-router-dom"
const Sign = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/signin', {
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
            <input onChange={handleInputChange} name="email" autoComplete="off" value={formValues.email} type="email" placeholder='Enter your Email' />
            <input onChange={handleInputChange} name="password" autoComplete="off" value={formValues.password} type="password" placeholder='Enter your password' />
            <button>Click</button>
            <p>If you have not account
              <NavLink activeClassName="active" to={"/login"}>Sign in</NavLink> 
            </p>

          </form>
        </div>
      </div>
    </>
  );
};

export default Sign;
