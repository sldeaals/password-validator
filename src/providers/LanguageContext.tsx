import { createContext } from "react";
import { Language, Translations } from "../types";

interface LanguageContextType {
  language: Language;
  translate: (key: string, translations: Translations) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export default LanguageContext;
