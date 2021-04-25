import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeWrapper';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.colors.text};
  background-color: ${(props) => props.colors.body};
`;

const Loading = () => {
  const { colors } = useContext(ThemeContext);
  return <Wrapper colors={colors}>Preparing screen...</Wrapper>;
};

export default Loading;
