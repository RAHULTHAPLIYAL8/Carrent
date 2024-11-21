import React from 'react';
import { NavLink } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <h1>CarRental</h1>
          <NavLink to="/cart">
            <button>Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
