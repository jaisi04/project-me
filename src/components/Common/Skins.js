import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR_LIGHT_GRAY, COLOR_BLUE, COLOR_REAL_BLUE } from '../../colors';

export const StyledHeader = styled.header`
  background-color: ${COLOR_LIGHT_GRAY};
`;

export const NavWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? COLOR_REAL_BLUE : COLOR_BLUE)};
  text-decoration: none;
  font-size: 1.2em;
  margin: 8px;
  font-weight: 500;
  > i {
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    margin-right: 4px;
  }
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: row;
  }
`;
