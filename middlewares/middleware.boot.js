module.exports = app => {
  const isDev = process.env.NODE_ENV === 'development';
  if (!isDev) {
    const prodMiddlewares = require('./middleware.prod');
    prodMiddlewares(app);
  } else {
    const webpackConfig = require('../webpack/webpack.config.dev');
    const devMiddlewares = require('./middleware.dev');
    devMiddlewares(app, webpackConfig);
  }
  return app;
};
