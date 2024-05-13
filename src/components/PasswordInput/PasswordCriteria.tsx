import React from "react";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { RULES_MESSAGES } from "../../utils/constants";
import { PasswordRules, CRITERION } from "../../types";
import { calculateStrength } from "../../utils";
import { DEFAULT_RULES } from "../../utils/constants";
import "./styles.scss";

interface PasswordCriteriaProps {
  password: string;
  rules?: PasswordRules;
}

const PasswordCriteria: React.FC<PasswordCriteriaProps> = ({
  password,
  rules = DEFAULT_RULES,
}) => {
  const passwordObj = calculateStrength(password, rules);

  const renderCriteriaChecklist = () =>
    Object.entries(passwordObj.conditions).map(([criterion, value]) => {
      let criteria;
      switch (criterion) {
        case CRITERION.MIN_LENGTH:
          criteria = RULES_MESSAGES.minLength;
          break;
        case CRITERION.LOWER_CASE:
          criteria = RULES_MESSAGES.lowerCase;
          break;
        case CRITERION.UPPER_CASE:
          criteria = RULES_MESSAGES.upperCase;
          break;
        case CRITERION.NUMBERS:
          criteria = RULES_MESSAGES.numbers;
          break;
        case CRITERION.SYMBOLS:
          criteria = RULES_MESSAGES.symbols;
          break;
        default:
          criteria = "";
      }

      const liClassName = `criterion ${
        password.length > 0
          ? value
            ? "criterion-passed"
            : "criterion-not-passed"
          : ""
      }`.trim();

      return (
        <li className={liClassName} key={criterion}>
          <div className="icon">
            {value || password.length <= 0 ? (
              <FaCheckCircle />
            ) : (
              <FaExclamationCircle />
            )}
          </div>
          <div className="criteria-text">{criteria}</div>
        </li>
      );
    });

  return <ul className="password-criteria">{renderCriteriaChecklist()}</ul>;
};

export default PasswordCriteria;
