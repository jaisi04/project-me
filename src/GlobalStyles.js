import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.page};
    color: ${(props) => props.theme.text};
  }
  body, #root {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

export default GlobalStyles;
