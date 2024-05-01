import { PasswordRules, ValidPassword } from "../types";

const validatePassword = (
  text: string,
  rules: PasswordRules,
): ValidPassword => {
  const { length = 32, isUpperCase, isLowerCase, hasNumber, hasSymbol } = rules;

  const regexUpperCase = /[A-Z]/g;
  const regexLowerCase = /[a-z]/g;
  const regexNumber = /[0-9]/g;
  const regexSymbol = /[!@#$%^&*(),.?':{}|<>]/g;

  const upperCaseCount = (text.match(regexUpperCase) || []).length;
  const lowerCaseCount = (text.match(regexLowerCase) || []).length;
  const numberCount = (text.match(regexNumber) || []).length;
  const symbolCount = (text.match(regexSymbol) || []).length;

  let maxLength: number = length < 12 ? 12 : length;
  let message: string = "";
  let valid: boolean = true;

  if (text.length < 8 || text.length > maxLength) {
    message = `Password must be between 8 and ${maxLength} characters long`;
    valid = false;
  } else if (isUpperCase && upperCaseCount < 2) {
    message = "Password must have at least 2 uppercase letters";
    valid = false;
  } else if (isLowerCase && lowerCaseCount < 2) {
    message = "Password must have at least 2 lowercase letters";
    valid = false;
  } else if (hasNumber && numberCount < 2) {
    message = "Password must have at least 2 numbers";
    valid = false;
  } else if (hasSymbol && symbolCount < 2) {
    message = "Password must have at least 2 symbols";
    valid = false;
  }

  return {
    password: text,
    valid,
    message,
  };
};

export default validatePassword;
