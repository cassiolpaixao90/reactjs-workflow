import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import history from './utils/utils.history';
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>opa</React.Fragment>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
  document.getElementById('app'),
);
