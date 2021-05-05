import React, {Component} from "react"
import './App.css';
import Dropdown from './components/options'
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './components/themes'
import Switch from "react-switch";

const StyledApp = styled.div``

export class App extends Component {
  constructor() {
    super();
    this.state = { 
      checked: false,
      theme: "light"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    if (this.state.theme === "dark") {
      this.setState({
        theme: "light"
      });
    } else {
      this.setState({
        theme: "dark"
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme = {this.state.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div id = "switchdiv" className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <label className = "switch">
                        <span>Dark mode:</span>
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </label>
                </div>
            </div>
        </div>
        <Dropdown></Dropdown>
      </StyledApp>
    </ThemeProvider>
    )
  }
}

export default App

// function App() {
//   const [theme, setTheme] =  useState("dark");

//   const themeToggler = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   }

//   return (
//     <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <StyledApp>
//         <SwitchExample></SwitchExample>
//         <Dropdown></Dropdown>
//       </StyledApp>
//     </ThemeProvider>
    
//   );
// }

// export default App;