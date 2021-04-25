import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { LanguageContext } from '../../LanguageProvider';
import { ThemeContext } from '../../ThemeWrapper';
import messages from './messages';
import { StyledLangWrapper, StyledLabel, StyledSelect } from './Skins';

const ChangeLanguage = () => {
  const { locale, selectLanguage } = useContext(LanguageContext);
  const { colors } = useContext(ThemeContext);
  const { formatMessage } = useIntl();
  const { changeLanguageLabel, languageEnglish, languageHindi } = messages;
  return (
    <StyledLangWrapper>
      <StyledLabel htmlFor="changeLanguage" colors={colors}>
        {formatMessage(changeLanguageLabel)}
      </StyledLabel>
      <StyledSelect
        id="changeLanguage"
        value={locale}
        onChange={selectLanguage}
        colors={colors}
      >
        <option value="en">{formatMessage(languageEnglish)}</option>
        <option value="hi">{formatMessage(languageHindi)}</option>
      </StyledSelect>
    </StyledLangWrapper>
  );
};

export default ChangeLanguage;
