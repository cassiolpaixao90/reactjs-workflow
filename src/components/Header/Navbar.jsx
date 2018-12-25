import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <React.Fragment>
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <Link to="/auth/register">Register</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/auth/login">Login</Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);

export default Navbar;
