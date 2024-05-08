import React, { useState } from "react";
import "./styles.scss";

interface CheckboxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className = "",
  label = "checkbox",
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <div className={`checkbox-wrapper ${className}`}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
