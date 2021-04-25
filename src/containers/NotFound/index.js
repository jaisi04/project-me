import React, { useContext } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { URL_HOME } from '../../urls';
import Button from '../../components/Common/Button';
import { ThemeContext } from '../../ThemeWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.colors.text};
`;

const NotFound = ({ history }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Wrapper colors={colors}>
      <h3>You have lost!</h3>
      <Button colors={colors} onClick={() => history.replace(URL_HOME)}>
        Let us go home!
      </Button>
    </Wrapper>
  );
};

NotFound.propTypes = {
  history: PropTypes.object,
};

export default withRouter(NotFound);
