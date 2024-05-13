import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordToggleProps {
  showPassword: boolean;
  togglePassword: () => void;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  showPassword,
  togglePassword,
}) => {
  return (
    <div className="password-toogle" onClick={togglePassword}>
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </div>
  );
};

export default PasswordToggle;
