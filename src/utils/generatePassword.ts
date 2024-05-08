import { PasswordRules } from "../types";
import { RULES } from "../utils";

const generatePassword = (rules: PasswordRules) => {
  const trueCount = Object.values(rules).filter(
    (value) => value === true,
  ).length;
  let characters = "";
  let password = "";
  let criteriaPassedCount = 0;

  const getRandomCharacter = (characters: string) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };

  if (rules.isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (rules.isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (rules.hasNumber) {
    characters += "0123456789";
  }
  if (rules.hasSymbol) {
    characters += "~!@#$%^&*()";
  }

  if (
    rules?.length &&
    (rules?.isLowerCase ||
      rules?.isUpperCase ||
      rules?.hasNumber ||
      rules?.hasSymbol)
  ) {
    while (true) {
      password = "";
      for (let i = 0; i < rules.length; i++) {
        password += getRandomCharacter(characters);
      }

      const upperCaseCount: number = (password.match(RULES.upperCase) || [])
        .length;
      const lowerCaseCount: number = (password.match(RULES.lowerCase) || [])
        .length;
      const numberCount: number = (password.match(RULES.number) || []).length;
      const symbolCount: number = (password.match(RULES.symbol) || []).length;

      if (rules?.isLowerCase && lowerCaseCount > 2) {
        criteriaPassedCount++;
      }

      if (rules?.isUpperCase && upperCaseCount > 2) {
        criteriaPassedCount++;
      }

      if (rules?.hasNumber && numberCount > 2) {
        criteriaPassedCount++;
      }

      if (rules?.hasSymbol && symbolCount > 2) {
        criteriaPassedCount++;
      }

      if (criteriaPassedCount >= trueCount - 1) {
        break;
      }
    }
  }

  return password;
};

export default generatePassword;
