import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import auth from '../../utils/utils.auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => auth.getAcessToken() !== null ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: 'auth/login',
          state: { from: props.location },
        }}
      />
    )
    }
  />
);

export default ProtectedRoute;
