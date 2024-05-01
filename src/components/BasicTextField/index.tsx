import React, { useState } from "react";
import "./styles.scss";

const BasicTextField: React.FC<{ label: string }> = ({ label }) => {
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
    <label className="input">
      <input
        className="input__field"
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
      />
      <span className={`input__label ${value ? "focused" : ""}`}>{label}</span>
    </label>
  );
};

export default BasicTextField;
