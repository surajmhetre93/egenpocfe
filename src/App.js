import './App.css';
import Dropdown from './components/options'
import SwitchExample from './components/switchmode'

import logo_egen from './static/egen-logo-mustard.svg';


function App() {
  return (
    <div className="App">
        <SwitchExample></SwitchExample>
        <Dropdown></Dropdown>
    </div>
  );
}

export default App;
