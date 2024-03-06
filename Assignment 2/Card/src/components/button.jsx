import React from "react";
import "./button.css";

const Button = ({ text, link }) => {
  return (
    <a href={link} className="card-btn">
      {text}
    </a>
  );
};

export default Button;
