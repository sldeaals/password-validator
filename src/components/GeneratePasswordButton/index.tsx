import React from "react";
import "./styles.scss";

interface GeneratePasswordButtonProps {
  onClick: () => void;
}

const GeneratePasswordButton: React.FC<GeneratePasswordButtonProps> = ({
  onClick,
}) => {
  return (
    <button className="gen-pws-button" onClick={onClick}>
      Generate Password
    </button>
  );
};

export default GeneratePasswordButton;
