import React from "react";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { PasswordRules, CRITERION } from "../../types";
import { calculateStrength } from "../../utils";
import { DEFAULT_RULES } from "../../utils/constants";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../translations";
import "./styles.scss";

interface PasswordCriteriaProps {
  password: string;
  rules?: PasswordRules;
}

const PasswordCriteria: React.FC<PasswordCriteriaProps> = ({
  password,
  rules = DEFAULT_RULES,
}) => {
  const { translate } = useLanguage();
  const passwordObj = calculateStrength(password, rules);

  const renderCriteriaChecklist = () =>
    Object.entries(passwordObj.conditions).map(([criterion, value]) => {
      let criteria;
      switch (criterion) {
        case CRITERION.MIN_LENGTH:
          criteria = translate(`minLength`, translations);
          break;
        case CRITERION.LOWER_CASE:
          criteria = translate(`lowerCase`, translations);
          break;
        case CRITERION.UPPER_CASE:
          criteria = translate(`upperCase`, translations);
          break;
        case CRITERION.NUMBERS:
          criteria = translate(`numbers`, translations);
          break;
        case CRITERION.SYMBOLS:
          criteria = translate(`symbols`, translations);
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
