import React, { useState } from "react";
import { BaseTextFieldProps } from "../../types";
import "./styles.scss";

interface BasicTextFieldProps extends BaseTextFieldProps {
  error?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  onChange,
  label = "text",
  type = "text",
  placeholder = "",
  variant = "standard",
  error = false,
  startIcon,
  endIcon,
}) => {
  const [value, setValue] = useState<string>("");
  const inputFieldClass = `input__field ${variant} ${error ? "error" : ""} ${startIcon ? "icon-start" : ""} ${endIcon ? "icon-end" : ""}`;
  const inputLabelClass = `input__label ${value ? "focused" : ""}`;

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
    <label className={`input`}>
      {startIcon && <div className="icon start">{startIcon}</div>}
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
  );
};

export default BasicTextField;
