import React, { useState } from "react";
import { BaseTextFieldProps } from "../../types";
import "./styles.scss";

interface BasicTextFieldProps extends BaseTextFieldProps {
  error?: string;
  endIcon?: React.ReactNode;
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  onChange,
  className = "",
  label = "text",
  type = "text",
  placeholder = "",
  variant = "standard",
  error = "",
  endIcon,
}) => {
  const [value, setValue] = useState<string>("");

  const parentClass = `input-wrapper ${className}`.trim();
  const inputFieldClass =
    `input__field ${variant} ${error ? "error" : ""} ${endIcon ? "icon-end" : ""}`.trim();
  const inputLabelClass = `input__label ${value ? "focused" : ""}`.trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleFocus = () => {
    document.activeElement?.classList.add("focused");
  };

  const handleBlur = () => {
    if (!value) {
      document.activeElement?.classList.remove("focused");
    }
  };

  return (
    <div className={parentClass}>
      <label className={`input`}>
        <input
          className={inputFieldClass}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
        <span className={inputLabelClass}>{label}</span>
        {endIcon && <div className="icon end">{endIcon}</div>}
      </label>
    </div>
  );
};

export default BasicTextField;
