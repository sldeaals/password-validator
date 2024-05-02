import React, { useState, useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleFocus = () => {
    inputRef.current?.classList.add("focused");
  };

  const handleBlur = () => {
    if (!value) {
      inputRef.current?.classList.remove("focused");
    }
  };

  return (
    <label className={`input`}>
      {startIcon && <div className="icon">{startIcon}</div>}
      <input
        ref={inputRef}
        className={`input__field ${variant} ${error ? "error" : ""}`}
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
