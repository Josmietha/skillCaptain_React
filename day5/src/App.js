import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import EventHandler from './EventHandler';

function App() {
  const [showMessage, setShowMessage] = useState(false);
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
        <br />
        <button onClick={()=> setShowMessage(!showMessage)}>
        Toggle Message
        </button>
        {
          showMessage &&
          "Hello, React Event Handling!"
        }
        <br />
        <EventHandler />
      </header>
    </div>
  );
}

export default App;