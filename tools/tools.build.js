const webpack = require('webpack');
const config = require('../webpack/webpack.config.prod');
const {
  messageError,
  messageSuccess,
  messageWarning,
  messageProcessing,
} = require('./tools.message');

process.env.NODE_ENV = 'production';

console.log(
  messageProcessing('Generating minified bundle. This will take a moment...'),
);

webpack(config).run((error, stats) => {
  if (error) {
    console.log(messageError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(err => console.log(messageError(err)));
  }

  if (jsonStats.hasWarnings) {
    console.log(messageWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(messageWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(
    messageSuccess(
      "Your app is compiled in production mode in /dist. It's ready to roll!",
    ),
  );

  return 0;
});
