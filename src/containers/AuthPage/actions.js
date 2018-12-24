import * as types from './types';
import authService from './service';
import authState from './initialState';
import history from '../../routes/history';

const authRequested = () => ({
  type: types.AUTH_REQUEST,
  isRequested: true,
});

const authSuccess = message => ({
  type: types.AUTH_SUCCESS,
  isRequested: false,
  message,
});

const authFailure = errors => ({
  type: types.AUTH_FAILURE,
  isRequested: false,
  errors,
});

export function onChange({ target }) {
  return {
    type: types.AUTH_ON_CHANGE,
    key: target.name,
    value: target.value,
  };
}

const setForm = (formType, email) => {
  let data;
  switch (formType) {
    case 'forgot-password':
      data = authState.reset_password;
      break;
    case 'login':
      data = authState.login;
      break;
    case 'register':
      data = authState.register;
      break;
    case 'register-success':
      data = {
        email,
      };
      break;
    case 'reset-password':
      data = authState.reset_password;
      break;
    default:
      data = {};
  }
  return {
    type: types.AUTH_SET_FORM,
    data,
    formType,
  };
};

const submit = (payload, type) => (dispatch) => {
  dispatch(authRequested());
  return authService
    .register(payload, type)
    .then((data) => {
      dispatch(authSuccess(data));
      dispatch(history.push('/logado'));
    })
    .catch((errors) => {
      dispatch(authFailure(errors));
    });
};

const handleAuthentication = () => (dispatch) => {
  dispatch(authRequested());
  return authService
    .refreshToken()
    .then((data) => {
      dispatch(authSuccess(data));
    })
    .catch((errors) => {
      dispatch(authFailure(errors));
    });
};

export { submit, setForm };

// export function logout() {
//   return (dispatch) => {
//     dispatch(userLogoutRequested());

//     authenticationApi
//       .logout()
//       .then(() => {
//         dispatch(userLogoutSuccessful());
//         dispatch(userDataUpdate({}));
//         dispatch(routerActions.push('/'));
//       })
//       .catch((err) => {
//         dispatch(userLogoutFailure(err));
//       });
//   };
// }
