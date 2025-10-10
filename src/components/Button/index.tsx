import type React from "react";
import "./index.css";

export interface ButtonProps {
  content: string;
  onClick: () => void;
}

const index: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button className="global-btn" onClick={onClick}>
      {content}
    </button>
  );
};

export default index;
