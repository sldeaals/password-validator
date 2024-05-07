import React, { useEffect, useState } from "react";
import "./styles.scss";

interface ProgressBarProps {
  count: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ count }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(count);
  }, [count]);

  const ProgressBar = {
    height: "100%",
    width: `${progress * 20}%`,
    backgroundColor: "blue",
    borderRadius: 40,
  };

  return (
    <div className="password-meter">
      <div style={ProgressBar}></div>
    </div>
  );
};

export default ProgressBar;
