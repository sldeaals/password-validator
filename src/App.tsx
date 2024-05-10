import React from "react";
import "./App.css";
import "./App.scss";
import { Fieldset, PasswordInput, PasswordGenerator } from "./components";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Validator</h1>
      </header>
      <div className="App-body">
        <Fieldset>{<PasswordInput validate showCriteria />}</Fieldset>
        <Fieldset>{<PasswordGenerator />}</Fieldset>
      </div>
      <footer className="App-footer">
        <img src={reactLogo} className="App-logo" alt="React logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={reactLogo} className="App-logo" alt="React logo" />
      </footer>
    </div>
  );
}

export default App;
