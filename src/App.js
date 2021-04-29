import React, {useState} from "react"
import './App.css';
import Dropdown from './components/options'
import SwitchExample from './components/switchmode'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './components/themes'

const StyledApp = styled.div``

function App() {
  const [theme, setTheme] =  useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <SwitchExample></SwitchExample>
        <Dropdown></Dropdown>
      </StyledApp>

    </ThemeProvider>
    
  );
}

export default App;