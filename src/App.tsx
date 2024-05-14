import React from "react";
import "./App.css";
import "./App.scss";
import { Fieldset, PasswordInput, PasswordGenerator } from "./components";
import { translations } from "./translations";
import LanguageSelect from "./components/LanguagueSelect";
import useLanguage from "./hooks/useLanguage";

function App() {
  const { translate } = useLanguage();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{translate(`passwordValidator`, translations)}</h1>
      </header>
      <div className="App-body">
        <LanguageSelect />
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
