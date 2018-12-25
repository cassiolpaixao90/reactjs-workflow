import React, { Component } from 'react';

class NavbarLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li
            onMouseLeave={() => this.changeOpen()}
            className={`dropdown user user-menu ${
              this.state.open ? 'open' : ''
            }`}
          >
            <a
              href="javascript:;"
              onClick={() => this.changeOpen()}
              aria-expanded={this.state.open ? 'true' : 'false'}
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="http://lorempixel.com/160/160/abstract"
                className="user-image"
                alt="User Image"
              />
              <span className="hidden-xs">teste</span>
            </a>
            <ul className="dropdown-menu">
              <li className="user-header">
                <img
                  src="http://lorempixel.com/160/160/abstract"
                  className="img-circle"
                  alt="User Image"
                />
                <p>
                  <small>email@email</small>
                </p>
              </li>
              <li className="user-footer">
                <div className="pull-right">
                  <a
                    href="#"
                    onClick={this.props.logout}
                    className="btn btn-default btn-flat"
                  >
                    Sair
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarLoggedIn;
