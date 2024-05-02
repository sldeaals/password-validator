import { PasswordRules, ValidPassword } from "../types";

const validatePassword = (
  text: string,
  rules: PasswordRules,
): ValidPassword => {
  const { length = 32, isUpperCase, isLowerCase, hasNumber, hasSymbol } = rules;

  const upperCaseCount = (text.match(/[A-Z]/g) || []).length;
  const lowerCaseCount = (text.match(/[a-z]/g) || []).length;
  const numberCount = (text.match(/[0-9]/g) || []).length;
  const symbolCount = (text.match(/[!@#$%^&*(),.?':{}|<>]/g) || []).length;

  const minLength = 8;
  const maxLength = length < 12 ? 12 : length;

  let message = "";
  let valid = true;

  if (text.length > 0) {
    if (text.length < minLength || text.length > maxLength) {
      message = `Password must be between ${minLength} and ${maxLength} characters long`;
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
  }

  return {
    password: text,
    valid,
    message,
  };
};

export default validatePassword;
