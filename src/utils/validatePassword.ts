import { PasswordRules, ValidPassword } from "../types";
import { RULES } from "../utils";
import { RULES_MESSAGES, MIN_LEN, CHAR_COUNT } from "./constants";

const validatePassword = (
  text: string,
  rules: PasswordRules,
): ValidPassword => {
  const { isUpperCase, isLowerCase, hasNumber, hasSymbol } = rules;

  const upperCaseCount: number = (text.match(RULES.upperCase) || []).length;
  const lowerCaseCount: number = (text.match(RULES.lowerCase) || []).length;
  const numberCount: number = (text.match(RULES.numbers) || []).length;
  const symbolCount: number = (text.match(RULES.symbols) || []).length;

  let message: string = "";
  let valid: boolean = true;

  if (text.length > 0) {
    if (text.length < MIN_LEN) {
      message = RULES_MESSAGES.minLength;
      valid = false;
    } else if (isLowerCase && lowerCaseCount < CHAR_COUNT) {
      message = RULES_MESSAGES.lowerCase;
      valid = false;
    } else if (isUpperCase && upperCaseCount < CHAR_COUNT) {
      message = RULES_MESSAGES.upperCase;
      valid = false;
    } else if (hasNumber && numberCount < CHAR_COUNT) {
      message = RULES_MESSAGES.numbers;
      valid = false;
    } else if (hasSymbol && symbolCount < CHAR_COUNT) {
      message = RULES_MESSAGES.symbols;
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
