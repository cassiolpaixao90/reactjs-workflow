import { fromJS, Map } from 'immutable';
import { createReducer } from 'reduxsauce';
import * as Types from './types';

const INITIAL_STATE = fromJS({
  formType: 'login',
  modifiedData: Map({}),
  isRequested: false,
  isRegistered: false,
  errors: [],
});

const setForm = (state = INITIAL_STATE, action) => state
  .set('formType', action.formType)
  .set('submitSuccess', false)
  .set('modifiedData', Map(action.data));

const onChange = (state = INITIAL_STATE, action) => state.updateIn(['modifiedData', action.key], () => action.value);

const onRequest = (state = INITIAL_STATE, action) => state.set('isRequested', true).set('isRegistered', false);

const onSuccess = (state = INITIAL_STATE, action) => state
  .set('isRequested', false)
  .set('isRegistered', true)
  .set('message', action.message);

const onFailure = (state = INITIAL_STATE, action) => state
  .set('isRequested', false)
  .set('isRegistered', false)
  .set('errors', action.errors);

const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_ON_CHANGE]: onChange,
  [Types.AUTH_SET_FORM]: setForm,
  [Types.AUTH_REQUEST]: onRequest,
  [Types.AUTH_SUCCESS]: onSuccess,
  [Types.AUTH_FAILURE]: onFailure,
});

export default reducer;
