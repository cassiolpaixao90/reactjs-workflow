const path = require('path');
const express = require('express');
const compression = require('compression');

module.exports = function addProdMiddlewares(app, options) {
  app.use(compression());
  app.use(express.static('dist'));
  app.get('*', (req, res) => res.sendFile(path.resolve('../dist/index.html')));
};
