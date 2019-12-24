import React from 'react';
import logo from './logo.svg';
import './App.css';
import someFn from "common/someFn";
import fn2 from "common/sub/fn2";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {someFn(4,99)}
        <br />
        {fn2("there!")}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
