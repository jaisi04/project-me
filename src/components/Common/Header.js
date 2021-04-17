import React from 'react';
import { withRouter } from 'react-router-dom';
import ChangeLanguage from './ChangeLanguage';
import Nav from './Nav';
import { StyledHeader } from './Skins';

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
      <ChangeLanguage />
    </StyledHeader>
  );
};

export default withRouter(Header);
