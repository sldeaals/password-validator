import { PasswordRules, ValidPassword } from "../types";
import { RULES } from "../utils";
import { MAX_LENGTH, RULES_MESSAGES } from "./constants";

const validatePassword = (
  text: string,
  rules: PasswordRules,
): ValidPassword => {
  const {
    length = MAX_LENGTH,
    isUpperCase,
    isLowerCase,
    hasNumber,
    hasSymbol,
  } = rules;

  const upperCaseCount: number = (text.match(RULES.upperCase) || []).length;
  const lowerCaseCount: number = (text.match(RULES.lowerCase) || []).length;
  const numberCount: number = (text.match(RULES.number) || []).length;
  const symbolCount: number = (text.match(RULES.symbol) || []).length;

  const minLength: number = 8;
  const maxLength: number = length < 12 ? 16 : length;

  let message: string = "";
  let valid: boolean = true;

  if (text.length > 0) {
    if (text.length < minLength) {
      message = RULES_MESSAGES.minLength;
      valid = false;
    } else if (text.length > maxLength) {
      message = `Password must be between ${minLength} and ${maxLength} characters long`;
      valid = false;
    } else if (isLowerCase && lowerCaseCount < 2) {
      message = RULES_MESSAGES.lowerCase;
      valid = false;
    } else if (isUpperCase && upperCaseCount < 2) {
      message = RULES_MESSAGES.upperCase;
      valid = false;
    } else if (hasNumber && numberCount < 2) {
      message = RULES_MESSAGES.number;
      valid = false;
    } else if (hasSymbol && symbolCount < 2) {
      message = RULES_MESSAGES.symbol;
      valid = false;
    }
  }

  return {
    password: text,
    valid,
    message,
  };
};

export default validatePassword;
