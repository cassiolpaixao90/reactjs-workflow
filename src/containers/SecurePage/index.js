import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectReducer from '../../utils/utils.injects';
import makeSelectSecurePage from './selectors';
import reducer from '../../reducers/createReducer';
import Content from '../../components/Layout/Content';
import ContentHeader from '../../components/Layout/ContentHeader';

const SecurePage = () => (
  <React.Fragment>
    <ContentHeader title="Home" />
    <Content>
      <h1>Now that you are logged in you have access to this page</h1>
      <p>
        <Link to={`/${Math.random()}`}>Go to another protected url</Link>
      </p>
      <p>
        <Link to="/">Back to HomePage</Link>
      </p>
    </Content>
  </React.Fragment>
);

SecurePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  securepage: makeSelectSecurePage(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'securePage', reducer });

export default compose(
  withReducer,
  withConnect
)(SecurePage);
