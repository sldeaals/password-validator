import {
  PasswordRules,
  StrengthType,
  ConditionPassed,
  CRITERION,
  Conditions,
} from "../types";
import { RULES } from "../utils";
import { MIN_LEN, STRONG_PSW_LEN } from "./constants";

interface StrengthMeter {
  strength: number;
  type: StrengthType;
  conditions: ConditionPassed;
}

const calculateStrength = (
  text: string,
  rules: PasswordRules,
): StrengthMeter => {
  const isUpperCase = RULES.upperCase.test(text);
  const isLowerCase = RULES.lowerCase.test(text);
  const hasNumber = RULES.numbers.test(text);
  const hasSymbol = RULES.symbols.test(text);
  const hasMinLen = text.length >= MIN_LEN;
  const conditions: Conditions = {
    [CRITERION.MIN_LENGTH]: false,
    [CRITERION.LOWER_CASE]: false,
    [CRITERION.UPPER_CASE]: false,
    [CRITERION.NUMBERS]: false,
    [CRITERION.SYMBOLS]: false,
  };
  let strength: number = 0;

  if (text.length > 0 && hasMinLen) {
    conditions[CRITERION.MIN_LENGTH] = true;
    strength++;
  }
  if (rules.isLowerCase && isLowerCase) {
    conditions[CRITERION.LOWER_CASE] = true;
    strength++;
  }
  if (rules.isUpperCase && isUpperCase) {
    conditions[CRITERION.UPPER_CASE] = true;
    strength++;
  }
  if (rules.hasNumber && hasNumber) {
    conditions[CRITERION.NUMBERS] = true;
    strength++;
  }
  if (rules.hasSymbol && hasSymbol) {
    conditions[CRITERION.SYMBOLS] = true;
    strength++;
  }

  const strengthType =
    strength <= 3
      ? StrengthType.WEAK
      : strength >= 5 && text.length >= STRONG_PSW_LEN
        ? StrengthType.STRONG
        : StrengthType.NORMAL;

  return { strength, type: strengthType, conditions };
};

export default calculateStrength;
