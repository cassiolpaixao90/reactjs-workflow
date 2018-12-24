<<<<<<< HEAD
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import FontFaceObserver from 'fontfaceobserver';
import LanguageProvider from './containers/LanguageProvider';
import RouterApp from './routes';
import history from './routes/history';
import configureStore from './store/configureStore';
import { translationMessages } from './utils/utils.i18n';
import './utils/utils.dependencies';

const openSansObserver = new FontFaceObserver('Open Sans', {});
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import history from './utils/utils.history';
import configureStore from './store';
>>>>>>> acbd357a41897509ca1d49274154272662f29a17

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

<<<<<<< HEAD
const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <RouterApp />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['./utils/utils.i18n', './containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/pt.js')]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
=======
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>opa</React.Fragment>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
  document.getElementById('app'),
);
>>>>>>> acbd357a41897509ca1d49274154272662f29a17
