import React from "react";
import "./styles.scss";
import useLanguage from "../../hooks/useLanguage";
import { translations } from "../../translations";

interface GeneratePasswordButtonProps {
  onClick: () => void;
}

const GeneratePasswordButton: React.FC<GeneratePasswordButtonProps> = ({
  onClick,
}) => {
  const { translate } = useLanguage();
  return (
    <button className="gen-pws-button" onClick={onClick}>
      {translate(`generatePassword`, translations)}
    </button>
  );
};

export default GeneratePasswordButton;
