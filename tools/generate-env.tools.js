const shell = require('shelljs');
const { messageSuccess, messageProcessing } = require('./message.tools');

if (process.env.NODE_ENV === 'development') {
  console.log(messageProcessing('generating .env file in mode dev...'));
  shell.cp('-R', '.env-tmp', '.env');
  console.log(messageSuccess('.env file in mode dev created.\n'));
}
