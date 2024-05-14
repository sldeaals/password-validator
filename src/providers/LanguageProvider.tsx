import React, { useState, FC } from "react";
import LanguageContext from "./LanguageContext";
import { Language, Translations } from "../types";

interface LanguageProviderProps {
  children: React.ReactNode;
}

const switchLang = (lang: string) => {
  switch (lang) {
    case "en":
      return "en";
    case "zh":
      return "zh";
    case "es":
      return "es";
    case "hi":
      return "hi";
    case "ar":
      return "ar";
    default:
      return "en";
  }
};

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const userLanguage = switchLang(navigator.language.split("-")[0]);
  const [language, setLanguage] = useState<Language>(userLanguage);

  const translate = (key: string, translations: Translations): string => {
    return translations[key][language];
  };

  const toggleLanguage = (): void => {
    setLanguage((prevLanguage) => {
      switch (prevLanguage) {
        case "en":
          return "zh";
        case "zh":
          return "es";
        case "es":
          return "hi";
        case "hi":
          return "ar";
        case "ar":
          return "en";
        default:
          return "en";
      }
    });
  };

  return (
    <LanguageContext.Provider value={{ language, translate, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
