import logo from './logo.svg';
import './App.css';
import Clock from './clock';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello World</h1>
        <p>This is JSX Example.</p>
        <Clock />
      </header>
    </div>
  );
}

export default App;
