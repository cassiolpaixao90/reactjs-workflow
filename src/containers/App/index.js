import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Nav from '../../components/NavBar/Nav';

const App = () => <Nav />;

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
