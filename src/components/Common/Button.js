import styled from 'styled-components';

const Button = styled.div`
  width: 120px;
  color: ${(props) => props.colors.button.text};
  font-weight: 600;
  text-align: center;
  background-color: transparent;
  padding: 0.25em 1em;
  border: 1px solid ${(props) => props.colors.button.border};
  border-radius: 4px;
`;

export default Button;
