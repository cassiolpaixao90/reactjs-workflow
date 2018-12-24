// import * as types from './authenticationTypes';
// import Api from '../libs/api';

export default function authMiddleware({ dispatch, getState }) {
  return next => (action) => {
    if (typeof action === 'function') {
      const state = getState();
      console.log('state', state);
      // if (!state) {
      //   if (state.token && isExpired(state.token)) {
      //     // make sure we are not already refreshing the token
      //     if (!state.refreshTokenPromise) {
      //       return refreshToken(dispatch, state).then(() => next(action));
      //     }
      //     return state.refreshTokenPromise.then(() => next(action));
      //   }
      // }
    }
    return next(action);
  };
}

// function isExpired(token) {
//   const currentTime = new Date();
//   const expiresDate = new Date(token.expires_date);
//   return currentTime > expiresDate;
// }

// function refreshToken(dispatch, state) {
//   const refreshTokenPromise = Api.post(
//     '/token',
//     {
//       grant_type: 'refresh_token',
//       username: state.token.username,
//       refresh_token: state.token.refresh_token,
//     },
//     null,
//     true
//   )
//     .then((resp) => {
//       dispatch({
//         type: types.DONE_REFRESHING_TOKEN,
//       });
//       dispatch({
//         type: types.LOGIN_SUCCESS,
//         data: resp,
//       });
//       dispatch({
//         type: types.SET_HEADER,
//         header: {
//           Authorization: `${resp.token_type} ${resp.access_token}`,
//           Instance: state.currentInstance.id,
//         },
//       });
//       return resp
//         ? Promise.resolve(resp)
//         : Promise.reject({
//           message: 'could not refresh token',
//         });
//     })
//     .catch((ex) => {
//       console.log('exception refresh_token', ex);
//       dispatch({
//         type: types.DONE_REFRESHING_TOKEN,
//       });
//       dispatch({
//         type: types.LOGIN_FAILED,
//         exception: ex,
//       });
//     });

//   dispatch({
//     type: types.REFRESHING_TOKEN,
//     refreshTokenPromise,
//   });

//   return refreshTokenPromise;
// }
