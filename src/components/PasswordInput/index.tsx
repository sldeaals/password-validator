import React, { useState, useCallback } from "react";
import BasicTextField from "../BasicTextField";
import { BaseTextFieldProps, PasswordRules, ValidPassword } from "../../types";
import { validatePassword } from "../../utils";
import PasswordToggle from "./PasswordToggle";
import PasswordCriteria from "./PasswordCriteria";

interface PasswordInputProps extends BaseTextFieldProps {
  rules?: PasswordRules;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  className = "",
  label = "password",
  variant,
  rules = {
    length: 24,
    isLowerCase: true,
    isUpperCase: true,
    hasNumber: true,
    hasSymbol: true,
  },
  placeholder = "",
}) => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<ValidPassword | undefined>(
    undefined,
  );

  const parentClass = `input-wrapper ${className}`.trim();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setPassword(newValue);
      if (onChange) {
        onChange(e);
      }
      setValidPassword(validatePassword(newValue, rules));
    },
    [onChange, rules],
  );

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={parentClass}>
      <BasicTextField
        label={label}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        placeholder={placeholder}
        variant={variant}
        endIcon={
          <PasswordToggle
            showPassword={showPassword}
            togglePassword={togglePassword}
          />
        }
        error={validPassword?.message}
      />
      <PasswordCriteria password={password} rules={rules} />
    </div>
  );
};

export default PasswordInput;
