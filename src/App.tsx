import React from "react";
import "./App.css";
import "./App.scss";
import { Fieldset, PasswordInput, PasswordGenerator } from "./components";
import { translations } from "./translations";
import LanguageSelect from "./components/LanguagueSelect";
import useLanguage from "./hooks/useLanguage";
import reactLogo from "./assets/react.svg";

function App() {
  const { translate } = useLanguage();
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-side">
          <img src={reactLogo} className="App-logo" alt="React logo" />
        </div>
        <h1 className="App-header-text">
          {translate(`passwordValidator`, translations)}
        </h1>
        <div className="App-header-side">
          <LanguageSelect />
        </div>
      </header>
      <div className="App-body">
        <Fieldset>{<PasswordInput validate showCriteria />}</Fieldset>
        <Fieldset>{<PasswordGenerator />}</Fieldset>
      </div>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate(`learnReact`, translations)}
        </a>
      </footer>
    </div>
  );
}

export default App;
