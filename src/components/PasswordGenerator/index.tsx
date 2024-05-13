import React, { useState } from "react";
import "./styles.scss";
import { FaClipboard } from "react-icons/fa";
import { PasswordRules } from "../../types";
import BasicTextField from "../BasicTextField";
import Checkbox from "../Checkbox";
import GeneratePasswordButton from "../GeneratePasswordButton";
import { generatePassword, calculateStrength } from "../../utils";
import { DEFAULT_RULES } from "../../utils/constants";

const PasswordGenerator: React.FC = () => {
  const [rules, setRules] = useState<PasswordRules>(DEFAULT_RULES);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [strength, setStrength] = useState<string>("");

  const strengthMeter = `strength meter-${generatedPassword ? strength : "none"}`;

  const handleCheckboxChange = (criterion: string, checked: boolean) => {
    setRules((prevRules) => ({
      ...prevRules,
      [criterion]: checked,
    }));
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(rules);
    const newStrength = calculateStrength(newPassword, rules);
    setGeneratedPassword(newPassword);
    setStrength(newStrength.type);
  };

  return (
    <div className={"complexity"}>
      <BasicTextField
        className="lgd_out_pg_pass"
        type="text"
        value={generatedPassword}
        placeholder="Type a password"
        endIcon={
          <FaClipboard
            onClick={() => {
              navigator.clipboard.writeText(generatedPassword);
            }}
          />
        }
        readOnly
      />
      <span className={strengthMeter}>
        {generatedPassword ? strength : "No password"}
      </span>
      <div className="checkbox-group">
        <Checkbox
          label="Include lowercase letters"
          onChange={(e) =>
            handleCheckboxChange("isLowerCase", e.target.checked)
          }
        />
        <Checkbox
          label="Include uppercase letters"
          onChange={(e) =>
            handleCheckboxChange("isUpperCase", e.target.checked)
          }
        />
        <Checkbox
          label="Include numbers"
          onChange={(e) => handleCheckboxChange("hasNumber", e.target.checked)}
        />
        <Checkbox
          label="Include symbols"
          onChange={(e) => handleCheckboxChange("hasSymbol", e.target.checked)}
        />
      </div>
      <GeneratePasswordButton onClick={handleGeneratePassword} />
    </div>
  );
};

export default PasswordGenerator;
