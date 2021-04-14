import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';
import { StyledHeader } from './Skins';

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default withRouter(Header);
