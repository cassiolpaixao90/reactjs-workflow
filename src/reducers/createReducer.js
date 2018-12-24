import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import languageProviderReducer from '../containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';
import history from '../routes/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    ...injectedReducers,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
