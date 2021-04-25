/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import useFirestore from './firebase/useFirestore';
import Loading from './components/Common/Loading';
import defaultColors from './defaultColors';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';

export const ThemeContext = React.createContext();

const ThemeWrapper = (props) => {
  const {
    docs: themes,
    isFSDataFetched: isThemeLoaded,
    isError,
  } = useFirestore('themes', 'name');
  const localTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(localTheme);
  const [colors, setColors] = useState(defaultColors);

  function selectTheme(e) {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    setColors(themes[selectedTheme].colors);
    localStorage.setItem('theme', selectedTheme);
  }

  useEffect(() => {
    setColors(
      !isError
        ? themes[theme]
          ? themes[theme].colors
          : defaultColors
        : defaultColors
    );
  }, [isThemeLoaded, isError]);
  return (
    <ThemeContext.Provider value={{ colors, selectTheme, theme }}>
      {!isThemeLoaded ? (
        <Loading />
      ) : (
        <ThemeProvider theme={colors}>
          <GlobalStyles />
          {[props.children]}
        </ThemeProvider>
      )}
    </ThemeContext.Provider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.array,
};
export default ThemeWrapper;
