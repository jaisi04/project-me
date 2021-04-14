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
    { url: URL_BLOG, name: 'Blogs', icon: 'article' },
    { url: URL_PROJECT, name: 'Projects', icon: 'engineering' },
    { url: URL_DEV, name: 'About me', icon: 'person' },
    { url: URL_CONTACT, name: 'Contact', icon: 'mail' },
    { url: URL_TRIBUTE, name: 'Tribute', icon: 'stars' },
  ];
  return (
    <NavWrapper>
      {navData.map(({ url, name, icon }) => (
        <StyledLink key={name} to={url} active={currentPath === url}>
          <i className="material-icons">{icon}</i>
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
