import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import ChangeLanguage from './ChangeLanguage';
import ChangeTheme from './ChangeTheme';
import Nav from './Nav';
import { ThemeContext } from '../../ThemeWrapper';
import { StyledHeader } from './Skins';

const Header = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <StyledHeader colors={colors}>
      <Nav />
      <ChangeLanguage />
      <ChangeTheme />
    </StyledHeader>
  );
};

export default withRouter(Header);
