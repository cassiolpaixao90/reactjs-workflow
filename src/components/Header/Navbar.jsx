import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { logout } from '../../actions/authActions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  changeOpen() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ open: !this.state.open });
  }

  render() {
    // const { name, email } = this.props.user;
    return (
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li
              onMouseLeave={() => this.changeOpen()}
              className={`dropdown user user-menu ${
                this.state.open ? 'open' : ''
              }`}
            />
          </ul>
        </div>

        <div className="collapse navbar-collapse pull-left">
          <ul className="nav navbar-nav">
            <li>Link1</li>
            <li>Link2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;

// const mapStateToProps = state => ({ user: state.auth.user });
// AuthOrApp.propTypes = {
//   user: PropTypes.object,
//   isValidated: PropTypes.bool
// };

// const mapStateToProps = state => {
//   const { validateTokenState } = state;
//   return {
//     user: validateTokenState.user,
//   };
// };

// const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Navbar);
