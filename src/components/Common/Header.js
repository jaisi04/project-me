import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <>
      <Nav />
    </>
  );
};

export default withRouter(Header);
