const express = require('express');
const chalk = require('chalk');
const ip = require('ip');
const setup = require('../middlewares/middleware.boot');
const { resolve } = require('path');
const { messageError } = require('../tools/tools.message');
const app = express();
require('dotenv').config();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
});

const serverOptions = {
  port: process.env.PORT,
  host: process.env.HOST
};

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(serverOptions.port, serverOptions.host, err => {
  if (err) {
    return messageError(err.message);
  }
  console.log(`
    Localhost: ${chalk.magenta(
      `http://${serverOptions.host}:${serverOptions.port}`
    )}
    LAN: ${chalk.magenta(`http://${ip.address()}:${serverOptions.port}`)}
    ${chalk.green(`Press ${chalk.italic('CTRL-C')} to stop`)}
  `);
});
