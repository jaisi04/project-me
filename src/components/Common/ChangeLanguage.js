import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { Context } from '../../LanguageProvider';
import messages from './messages';
import { StyledLabel, StyledSelect } from './Skins';

const ChangeLanguage = () => {
  const context = useContext(Context);
  const { formatMessage } = useIntl();
  const { changeLanguageLabel, languageEnglish, languageHindi } = messages;
  return (
    <section>
      <StyledLabel htmlFor="changeLanguage">
        {formatMessage(changeLanguageLabel)}
      </StyledLabel>
      <StyledSelect
        id="changeLanguage"
        value={context.locale}
        onChange={context.selectLanguage}
      >
        <option value="en">{formatMessage(languageEnglish)}</option>
        <option value="hi">{formatMessage(languageHindi)}</option>
      </StyledSelect>
    </section>
  );
};

export default ChangeLanguage;
