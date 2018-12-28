import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Header from '../../components/Header/Header';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import If from '../../components/Operator/If';
import RouterApp from '../../routes';

const App = () => {
  const isLoggedIn = true;
  return (
    <React.Fragment>
      <If test={isLoggedIn}>
        <Header />
        <RouterApp />
      </If>
      <If test={!isLoggedIn}>
        <div className="wrapper">
          <Header />
          <SideBar />
          <Footer />
          <RouterApp />
        </div>
      </If>
    </React.Fragment>
  );
};

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
