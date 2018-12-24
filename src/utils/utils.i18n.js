const { addLocaleData } = require('react-intl');
const ptLocaleData = require('react-intl/locale-data/pt');
const ptTranslationMessages = require('../translations/pt.json');

addLocaleData(ptLocaleData);

const DEFAULT_LOCALE = 'pt';
const appLocales = ['pt'];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, ptTranslationMessages)
    : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  pt: formatTranslationMessages('pt', ptTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
