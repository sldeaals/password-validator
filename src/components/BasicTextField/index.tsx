import React, { useState } from "react";
import "./styles.scss";

interface BasicTextFieldProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  variant?: "outlined" | "standard";
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  label = "text",
  type = "text",
  placeholder = "",
  variant = "standard",
  startIcon,
  endIcon,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    const labelElement = document.querySelector(".input__label");
    if (labelElement) {
      labelElement.classList.add("focused");
    }
  };

  const handleBlur = () => {
    const labelElement = document.querySelector(".input__label");
    if (!value && labelElement) {
      labelElement.classList.remove("focused");
    }
  };

  return (
    <label className={`input`}>
      {startIcon && <div className="icon">{startIcon}</div>}
      <input
        className={`input__field ${variant}`}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      <span className={`input__label ${value ? "focused" : ""}`}>{label}</span>
      {endIcon && <div className="icon">{endIcon}</div>}
    </label>
  );
};

export default BasicTextField;
