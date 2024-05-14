import React, { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { languages } from "../../utils/constants";

const LanguageSelect: FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <select value={language} onChange={toggleLanguage}>
      {Object.entries(languages).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
