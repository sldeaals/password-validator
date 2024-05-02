import React, { useState } from "react";
import { BaseTextFieldProps } from "../../types";
import "./styles.scss";

interface BasicTextFieldProps extends BaseTextFieldProps {
  error?: boolean;
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  label = "text",
  type = "text",
  placeholder = "",
  variant = "standard",
  onChange,
  error = false,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleFocus = () => {
    const labelElement = document.querySelector(".input__label");
    labelElement?.classList.add("focused");
  };

  const handleBlur = () => {
    const labelElement = document.querySelector(".input__label");
    !value && labelElement?.classList.remove("focused");
  };

  return (
    <label className={`input`}>
      <input
        className={`input__field ${variant} ${error ? "error" : ""}`}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      <span className={`input__label ${value ? "focused" : ""}`}>{label}</span>
    </label>
  );
};

export default BasicTextField;
