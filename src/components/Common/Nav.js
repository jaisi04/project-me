import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  URL_BLOG,
  URL_CONTACT,
  URL_DEV,
  URL_PROJECT,
  URL_TRIBUTE,
} from '../../urls';
import { NavWrapper, StyledLink } from './Skins';

const Nav = ({ location }) => {
  const currentPath = location.pathname;
  const navData = [
    { url: URL_BLOG, name: 'Blogs' },
    { url: URL_PROJECT, name: 'Projects' },
    { url: URL_DEV, name: 'About me' },
    { url: URL_CONTACT, name: 'Contact' },
    { url: URL_TRIBUTE, name: 'Tribute of the week' },
  ];
  return (
    <NavWrapper>
      {navData.map(({ url, name }) => (
        <StyledLink key={name} to={url} active={currentPath === url}>
          {name}
        </StyledLink>
      ))}
    </NavWrapper>
  );
};

Nav.propTypes = {
  location: PropTypes.object,
};

export default withRouter(Nav);
