import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import SecurePage from '../containers/SecurePage';
import ProtectedRoute from '../containers/ProtectedRoute';
import NotFoundPage from '../containers/NotFoundPage/Loadable';
import HomePage from '../containers/HomePage/Loadable';
import AuthPage from '../containers/AuthPage/Loadable';

const RouterApp = () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
    <Route path="/auth/:authType/:id?" component={AuthPage} />
    <Route component={NotFoundPage} />
    <Switch>
      <ProtectedRoute path="/dashboard" component={SecurePage} />
    </Switch>
  </React.Fragment>
);

export default RouterApp;

// App.defaultProps = {};
// App.propTypes = {
//   validateToken: PropTypes.object.isRequired,
// };

// const mapStateToProps = makeSelectAuthPage();

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       validateToken,
//     },
//     dispatch
//   );
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

// const withReducer = injectReducer({ key: 'authPage', reducer });
// export default compose(
//   withReducer,
//   withConnect
// )(App);
