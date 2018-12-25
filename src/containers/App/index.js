import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from '../../components/Header/Header';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Footer/Footer';
import RouteApp from '../../routes';

const App = () => (
  <React.Fragment>
    <Header />
    <RouteApp />
  </React.Fragment>
);

export default App;

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
