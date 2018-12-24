import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import createReducer from '../reducers/createReducer';
import authMiddleware from '../middlewares/authMiddleware';

const configureStore = (initialState = {}, history) => {
  const middlewares = [routerMiddleware(history), authMiddleware];
  const enhancers = [applyMiddleware(thunk, ...middlewares)];
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  store.injectedReducers = {};

  if (module.hot) {
    module.hot.accept('../reducers/createReducer', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
};

export default configureStore;
