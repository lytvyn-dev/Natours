import React from "react";

import "../../src/styles/index.css";

interface ButtonProps {
  textColor: string;
  title: string;
  bgColor: string;
  animation?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a
      className={`btn ${props.animation} ${props.animation ? "opacity-0" : ""} after:bg-${
        props.bgColor
      } bg-${props.bgColor} text-${props.textColor}`}
      href="#"
    >
      {props.title}
    </a>
  );
};

export default Button;
