import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR_LIGHT_GRAY, COLOR_BLUE, COLOR_REAL_BLUE } from '../../colors';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column;
  background-color: ${COLOR_LIGHT_GRAY};
`;

export const NavWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
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
  @media (max-width: 680px) {
    flex-direction: row;
  }
`;

export const StyledLabel = styled.label`
  margin-left: 8px;
  color: ${COLOR_BLUE};
  font-size: 16px;
`;

export const StyledSelect = styled.select`
  width: 96px;
  border: 1px solid ${COLOR_REAL_BLUE};
  color: ${COLOR_BLUE};
  border-radius: 2px;
  padding: 4px;
  font-size: 16px;
`;
