import { isEmpty } from 'lodash';

const ACESS_TOKEN = 'access_token';
const ID_USER = 'id_user';
const EXPIRES_AT = 'expires_at';
const SCOPE = 'scopes';

const auth = {
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }
    return null;
  },

  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearAcessToken(tokenKey = ACESS_TOKEN) {
    return auth.clear(tokenKey);
  },
  clearIdUser(isUser = ID_USER) {
    return auth.clear(isUser);
  },
  clearExpiresAt(expireAt = EXPIRES_AT) {
    return auth.clear(expireAt);
  },
  clearScope(scope = SCOPE) {
    return auth.clear(scope);
  },

  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key)) || null;
    }
    if (sessionStorage && sessionStorage.getItem(key)) {
      return JSON.parse(sessionStorage.getItem(key)) || null;
    }
    return null;
  },

  getAcessToken(acessToken = ACESS_TOKEN) {
    return auth.get(acessToken);
  },
  getIdUser(idUser = ID_USER) {
    return auth.get(idUser);
  },
  getExpiresToken(expires_at = EXPIRES_AT) {
    return auth.get(expires_at);
  },
  getScope(scope = SCOPE) {
    return auth.get(scope);
  },

  set(value, key, isLocalStorage) {
    if (isEmpty(value)) {
      return null;
    }
    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    if (sessionStorage) {
      return sessionStorage.setItem(key, JSON.stringify(value));
    }
    return null;
  },
  setAcessToken(value = '', isLocalStorage = false, tokenKey = ACESS_TOKEN) {
    return auth.set(value, tokenKey, isLocalStorage);
  },
  setIdUser(value = '', isLocalStorage = false, idUser = ID_USER) {
    return auth.set(value, idUser, isLocalStorage);
  },
  setExpiresToken(value = '', isLocalStorage = false, expiresAt = EXPIRES_AT) {
    return auth.set(value, expiresAt, isLocalStorage);
  },
  setScope(value = '', isLocalStorage = false, scope = SCOPE) {
    return auth.set(value, scope, isLocalStorage);
  },
};

export default auth;
