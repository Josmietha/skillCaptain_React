import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [count, setCount] = useState(0);
        
  useEffect(() => {
    const timer = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);
  return () => clearInterval(timer);
  }, []);
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
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(prevCount=>prevCount + 1)}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </header>
    </div>
  );
}

export default App;
