import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Content from '../Layout/Content';

const Header = props => (
  <header className="main-header">
    <button className="toggle-button">
      <span className="toggle-button__bar" />
      <span className="toggle-button__bar" />
      <span className="toggle-button__bar" />
    </button>

    <Link to="/" className="main-header__brand">
      <img
        src="https://cdn-images-1.medium.com/max/1200/1*6kK9j74vyOmXYm1gN6ARhQ.png"
        alt="ReactJS"
      />
    </Link>

    <Navbar />
  </header>
);

export default Header;
