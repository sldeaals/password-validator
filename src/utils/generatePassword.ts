import { PasswordRules } from "../types";
import { RULES } from "../utils";
import { CHAR_COUNT } from "../utils/constants";

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
    characters += "!@#$%&_";
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
      const numberCount: number = (password.match(RULES.numbers) || []).length;
      const symbolCount: number = (password.match(RULES.symbols) || []).length;

      if (rules?.isLowerCase && lowerCaseCount >= CHAR_COUNT) {
        criteriaPassedCount++;
      }

      if (rules?.isUpperCase && upperCaseCount >= CHAR_COUNT) {
        criteriaPassedCount++;
      }

      if (rules?.hasNumber && numberCount >= CHAR_COUNT) {
        criteriaPassedCount++;
      }

      if (rules?.hasSymbol && symbolCount >= CHAR_COUNT) {
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
