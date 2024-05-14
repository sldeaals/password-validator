import { CRITERION, CRITERIA, Language } from "../types";

export const MIN_LEN = 8;
export const MAX_LEN = 24;
export const STRONG_PSW_LEN = 12;
export const CHAR_COUNT = 1;

export const MIN_LENGTH = /^.{8,}$/g;
export const LOWER_CASE_REGEX = /[a-z]/g;
export const UPPER_CASE_REGEX = /[A-Z]/g;
export const NUMBER_REGEX = /\d/;
export const SYMBOL_REGEX = /[!@#$%^&*()_]/;

export const RULES = {
  [CRITERION.MIN_LENGTH]: MIN_LENGTH,
  [CRITERION.LOWER_CASE]: LOWER_CASE_REGEX,
  [CRITERION.UPPER_CASE]: UPPER_CASE_REGEX,
  [CRITERION.NUMBERS]: NUMBER_REGEX,
  [CRITERION.SYMBOLS]: SYMBOL_REGEX,
};

export const RULES_MESSAGES = {
  [CRITERION.MIN_LENGTH]: `Must be a minimum of ${MIN_LEN} characters`,
  [CRITERION.LOWER_CASE]: `Must contain at least ${CHAR_COUNT} lowercase letters`,
  [CRITERION.UPPER_CASE]: `Must contain at least ${CHAR_COUNT} uppercase letters`,
  [CRITERION.NUMBERS]: `Must contain at least ${CHAR_COUNT} digits`,
  [CRITERION.SYMBOLS]: `Must contain at least ${CHAR_COUNT} of the following special characters !@#$%^&*()_`,
};

export const DEFAULT_RULES = {
  [CRITERIA.LENGTH]: STRONG_PSW_LEN,
  [CRITERIA.IS_LOWER_CASE]: true,
  [CRITERIA.IS_UPPER_CASE]: true,
  [CRITERIA.HAS_NUMBERS]: true,
  [CRITERIA.HAS_SYMBOLS]: true,
};

export const languages: { [key in Language]: string } = {
  en: "English",
  zh: "Mandarin Chinese",
  es: "Spanish",
  hi: "Hindi",
  ar: "Arabic",
};
