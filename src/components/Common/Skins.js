import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: column;
  background-color: ${(props) => props.colors.header.background};
  color: ${(props) => props.colors.header.text};
  box-shadow: 0 4px 8px -8px ${(props) => props.colors.header.boxShadow};
  user-select: none;
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
  color: ${(props) =>
    props.active ? props.colors.link.active : props.colors.link.initial};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2em;
  margin: 8px;
  font-weight: 500;
  &:hover {
    color: ${(props) => props.colors.link.active};
  }
  > i {
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    margin-right: 4px;
  }
  @media (max-width: 680px) {
    flex-direction: row;
  }
`;

export const StyledLangWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 8px;
  margin-top: 8px;
  align-items: center;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.colors.text};
  font-size: 16px;
  margin-right: 4px;
`;

export const StyledSelect = styled.select`
  width: 96px;
  border: 1px solid ${(props) => props.colors.button.border};
  color: ${(props) => props.colors.select};
  border-radius: 2px;
  padding: 4px;
  font-size: 16px;
  outline: none;
`;
