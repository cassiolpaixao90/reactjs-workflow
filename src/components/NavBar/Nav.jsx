import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/auth/login">Login</Link>
      </li>
      <li>
        <Link to="/auth/register">Register</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
