import React, { useState } from "react";
import "./styles.scss";

interface BasicTextFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  variant?: "outlined" | "standard";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  label = "text",
  type = "text",
  placeholder = "",
  variant = "standard",
  onChange,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(e);
    }
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
    </label>
  );
};

export default BasicTextField;
