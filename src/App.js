import './App.css';
import Dropdown from './components/options'
import logo_egen from './static/egen-logo-mustard.svg';


function App() {
  return (
    <div className="App">
      <header>
        <div class="container-fluid">
          <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand" href="#">
                <img src={logo_egen} alt="egen" class="logo-background" />
              </a>
            
          </nav>
        </div>
      </header>
      <div class="hidden-spacer"> </div>
      <div class="container">
        <Dropdown></Dropdown>
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <h2>Get in Touch</h2>
            <p class="office-city">CHICAGOLAND</p>
            <p class="office-address">40 Shuman Blvd, Suite 302,</p>
            <p class="office-address">Naperville, IL - 60563, USA</p>
            <p class="office-email"><a class="orange-underline" href="mailto:chicago@egen.solutions">chicago@egen.solutions</a></p>
            <p class="office-phone">+1 630-844-0440</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
