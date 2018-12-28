// eslint-disable-next-line prefer-destructuring
const exec = require('child_process').exec;

exec('node -v', (err, stdout) => {
  if (err) throw err;
  if (parseFloat(stdout.slice(1)) < 4) {
    throw new Error('The project requires node 8.0 or greater.');
  }
});
