import 'whatwg-fetch';
import auth from './utils.auth';

function parseJSON(response) {
  return response.json ? response.json() : response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return parseJSON(response).then((responseFormatted) => {
    const error = new Error(response.statusText);
    error.response = response;
    error.response.payload = responseFormatted;
    throw error;
  });
}

function formatQueryParams(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
}

export default function request(
  url,
  options = {},
  shouldWatchServerRestart = false
) {
  let _urlApi = `${process.env.URL_API}${url}`;
  options.headers = Object.assign(
    {
      'Content-Type': 'application/json',
    },
    options.headers,
    {}
  );

  const token = auth.getAcessToken();

  if (token) {
    options.headers = Object.assign(
      {
        Authorization: `Bearer ${token}`,
      },
      options.headers
    );
  }

  if (options && options.params) {
    const params = formatQueryParams(options.params);
    _urlApi = `${_urlApi}?${params}`;
  }

  if (options && options.body) {
    options.body = JSON.stringify(options.body);
  }

  return fetch(_urlApi, options)
    .then(checkStatus)
    .then(parseJSON);
}
