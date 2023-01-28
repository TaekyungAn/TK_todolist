import { isDarkAtom } from "atoms";
import React from "react";
import { Outlet } from "react-router-dom";
import { atom, useRecoilValue } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "style/theme";
import { GlobalStyle } from "style/globalstyle";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <AppWrapper className="App">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
