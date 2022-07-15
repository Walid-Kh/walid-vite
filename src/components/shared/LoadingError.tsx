import React from "react";

interface props {
  errMsg: string;
}

export const LoadingError: React.FC<props> = ({ errMsg }) => {
  return (
    <div className="text-xl font-mono text-center font-bold">
      <p className="LoadingErrorIcon">❌</p>
      <p className="LoadingErrorMsg">{errMsg}</p>
    </div>
  );
};

export default LoadingError;
