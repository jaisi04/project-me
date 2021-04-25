import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { ThemeContext } from '../../ThemeWrapper';
import messages from './messages';
import { StyledLangWrapper, StyledLabel, StyledSelect } from './Skins';

const ChangeTheme = () => {
  const { formatMessage } = useIntl();
  const { colors, selectTheme, theme } = useContext(ThemeContext);
  const { changeThemeLabel, themeLight, themeDark } = messages;
  return (
    <StyledLangWrapper>
      <StyledLabel htmlFor="changeLanguage" colors={colors}>
        {formatMessage(changeThemeLabel)}
      </StyledLabel>
      <StyledSelect
        id="changeLanguage"
        value={theme}
        onChange={selectTheme}
        colors={colors}
      >
        <option value="light">{formatMessage(themeLight)}</option>
        <option value="dark">{formatMessage(themeDark)}</option>
      </StyledSelect>
    </StyledLangWrapper>
  );
};

export default ChangeTheme;
