import React from 'react';
import { Link } from 'react-router-dom';
import NavbarNoLoggedIn from './NavbarNoLoggedIn';
import NavbarLoggedIn from './NavbarLoggedIn';
import Content from '../Layout/Content';
import If from '../Operator/If';
import './styles.css';

const Header = (props) => {
  const isLoggedIn = true;
  return (
    <React.Fragment>
      <If test={isLoggedIn}>
        <header className="main-header">
          <a href="javascript:;" className="logo">
            <span className="logo-mini">
              <b>React</b>
            </span>
            <span className="logo-lg">
              <i className="" />
              <b> React</b> JS
            </span>
          </a>
          <nav className="navbar navbar-static-top">
            <a
              href="javascript:;"
              className="sidebar-toggle"
              data-toggle="offcanvas"
            >
              <span />
            </a>
            <NavbarLoggedIn />
          </nav>
        </header>
      </If>

      <If test={!isLoggedIn}>
        <header className="main-header-nologged">
          <button className="toggle-button">
            <span className="toggle-button__bar" />
            <span className="toggle-button__bar" />
            <span className="toggle-button__bar" />
          </button>

          <Link to="/" className="main-header-nologged__brand">
            <img
              src="https://cdn-images-1.medium.com/max/1200/1*6kK9j74vyOmXYm1gN6ARhQ.png"
              alt="ReactJS"
            />
          </Link>

          <NavbarNoLoggedIn />
        </header>
      </If>
    </React.Fragment>
  );
};
export default Header;
