import './App.css';
import Dropdown from './components/options'
import logo_egen from './static/egen-logo-mustard.svg';


function App() {
  return (
    <div className="App">
      <header>
        <div class="container-fluid">
          <nav class="navbar navbar-light bg-light">
          </nav>
        </div>
      </header>
      <div class="hidden-spacer"> </div>
      <div class="container">
        <Dropdown></Dropdown>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;
