const shell = require('shelljs');
const { messageSuccess, messageProcessing } = require('./tools.message');

if (process.env.NODE_ENV === 'development') {
  console.log(messageProcessing('generating .env file in mode dev...'));
  shell.cp('-R', '.env-tmp', '.env');
  console.log(messageSuccess('.env file in mode dev created.\n'));
}
