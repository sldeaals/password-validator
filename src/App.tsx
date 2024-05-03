import React from "react";
import "./App.css";
import "./App.scss";
import { BasicTextField, PasswordInput } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Password Validator Input</p>
      </header>
      <div className="App-body">
        <div className="App-body-input">
          {<BasicTextField label="Basic Input Field" />}
          <div className="fieldset">{<PasswordInput />}</div>
        </div>
      </div>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
