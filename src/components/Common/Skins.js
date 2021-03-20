import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR_BLUE, COLOR_REAL_BLUE } from '../../colors';

export const NavWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => (props.active ? COLOR_BLUE : COLOR_REAL_BLUE)};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  font-size: 1.2em;
  margin: 0 8px;
  font-weight: 500;
`;
