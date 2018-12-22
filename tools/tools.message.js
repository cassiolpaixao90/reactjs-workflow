const chalk = require('chalk');

const messageError = chalk.red;
const messageSuccess = chalk.green;
const messageWarning = chalk.yellow;
const messageProcessing = chalk.blue;

module.exports = {
  messageError,
  messageSuccess,
  messageWarning,
  messageProcessing
};
