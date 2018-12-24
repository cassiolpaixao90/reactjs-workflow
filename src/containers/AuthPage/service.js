import * as jwtDecode from 'jwt-decode';
import auth from '../../utils/utils.auth';
import request from '../../utils/utils.request';

export default {
  async register(data, type) {
    try {
      let _url;
      if (type === 'register') _url = '/auth/user';
      else if (type === 'login') _url = '/auth/login';
      const response = await request(_url, {
        method: 'POST',
        body: data,
      });

      if (type === 'login') {
        this.setSession(response.token, data.rememberMe);
      }
      return response;
    } catch (error) {
      throw error;
    }
  },
  async refreshToken() {
    try {
      const _url = '/auth/refreshToken';
      const response = await request(_url, {
        method: 'POST',
      });
      this.setSession(response.token);
      return response;
    } catch (error) {
      throw error;
    }
  },
  setSession(token, rememberMe = false) {
    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp * 1000 + new Date().getTime();
    rememberMe = auth.getAcessToken();
    auth.setAcessToken(token, rememberMe);
    auth.setIdUser(token, rememberMe);
    auth.setExpiresToken(expiresAt);
    auth.setScope(expiresAt);
  },
  isAuthenticated() {
    const expiresAt = auth.getExpiresToken();
    return new Date().getTime() < expiresAt;
  },
  getAccessToken() {
    const accessToken = auth.getAcessToken();
    if (!accessToken) {
      throw new Error('No access token found.');
    }
    return accessToken;
  },
  getProfile() {
    const token = auth.getAccessToken();
    const decodedToken = jwtDecode(token);
    return decodedToken.email;
  },
  userHasScopes(scopes) {
    const grantedScopes = (auth.getScope() || '').split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  },
  logout() {
    // return client
    //   .get('/api/user/logout')
    //   .then(response => response.status)
    //   .catch((err) => {
    //     throw err;
    //   });
  },
};
