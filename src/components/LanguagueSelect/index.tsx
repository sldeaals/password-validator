import React, { FC } from "react";
import useLanguage from "../../hooks/useLanguage";
import { languages } from "../../utils/constants";

interface LanguageSelectProps {
  className?: string;
}

const LanguageSelect: FC<LanguageSelectProps> = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <select className={className} value={language} onChange={toggleLanguage}>
      {Object.entries(languages).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
