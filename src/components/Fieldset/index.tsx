import React from "react";
import "./styles.scss";

interface FieldsetProps extends React.PropsWithChildren {
  children: React.ReactElement;
}

const Fieldset: React.FC<FieldsetProps> = ({ children }) => {
  return <div className="fieldset">{children}</div>;
};

export default Fieldset;
