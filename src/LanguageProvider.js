import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { IntlProvider } from 'react-intl';
import locale_hi from './translations/hi.json';
import locale_en from './translations/en.json';

export const LanguageContext = React.createContext();

const language = navigator.language.split(/[-_]/)[0];

const localeMessages = {
  en: locale_en,
  hi: locale_hi,
};

const LanguageProvider = (props) => {
  const [locale, setLocale] = useState(language);
  const [messages, setMessages] = useState(localeMessages[language]);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en') {
      setMessages(locale_en);
    } else {
      setMessages(locale_hi);
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={language}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.array,
};
export default LanguageProvider;
