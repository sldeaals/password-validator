import { PasswordRules } from "../types";
import { RULES } from "../utils";
import { StrengthType, ConditionPassed } from "../types";
import { MIN_LEN } from "./constants";

interface StrengthMeter {
  strength: number;
  type: StrengthType;
  conditions: ConditionPassed;
}

const calculateStrength = (
  text: string,
  rules: PasswordRules,
): StrengthMeter => {
  const { isUpperCase, isLowerCase, hasNumber, hasSymbol } = rules;

  let strength: number = 0;
  let strengthType: StrengthType;
  const conditionMet = {
    minLength: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    symbol: false,
  };

  if (text.length >= MIN_LEN) {
    conditionMet.minLength = true;
    strength++;
  }
  if (isLowerCase && RULES.lowerCase.test(text)) {
    conditionMet.lowerCase = true;
    strength++;
  }
  if (isUpperCase && RULES.upperCase.test(text)) {
    conditionMet.upperCase = true;
    strength++;
  }
  if (hasNumber && RULES.number.test(text)) {
    conditionMet.number = true;
    strength++;
  }
  if (hasSymbol && RULES.symbol.test(text)) {
    conditionMet.symbol = true;
    strength++;
  }

  if (strength <= 3) {
    strengthType = StrengthType.WEAK;
  } else if (strength <= 5) {
    strengthType = StrengthType.NORMAL;
  } else {
    strengthType = StrengthType.STRONG;
  }

  return { strength, type: strengthType, conditions: { ...conditionMet } };
};

export default calculateStrength;
