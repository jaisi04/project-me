import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeContext } from '../../ThemeWrapper';
import {
  URL_BLOG,
  URL_CONTACT,
  URL_DEV,
  URL_PROJECT,
  URL_TRIBUTE,
} from '../../urls';
import { NavWrapper, StyledLink } from './Skins';
import messages from './messages';

const Nav = ({ location }) => {
  const { formatMessage } = useIntl();
  const { colors } = useContext(ThemeContext);
  const {
    headerBlogs,
    headerProjects,
    headerAboutMe,
    headerContact,
    headerTribute,
  } = messages;
  const currentPath = location.pathname;
  const navData = [
    {
      url: URL_BLOG,
      name: formatMessage(headerBlogs),
      icon: 'article',
    },
    {
      url: URL_PROJECT,
      name: formatMessage(headerProjects),
      icon: 'engineering',
    },
    { url: URL_DEV, name: formatMessage(headerAboutMe), icon: 'person' },
    { url: URL_CONTACT, name: formatMessage(headerContact), icon: 'mail' },
    { url: URL_TRIBUTE, name: formatMessage(headerTribute), icon: 'stars' },
  ];
  return (
    <NavWrapper>
      {navData.map(({ url, name, icon }) => (
        <StyledLink
          key={name}
          to={url}
          active={currentPath === url}
          colors={colors}
        >
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
