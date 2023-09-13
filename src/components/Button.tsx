import React from "react";

import "../../src/styles/index.css";

interface ButtonProps {
  textColor: string;
  href: string | "";
  title: string;
  bgColor: string;
  animation?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a
      className={`btn ${props.animation} ${props.animation ? "opacity-0" : ""} z-[10]  ${
        props.bgColor
      } ${props.textColor}`}
      href={props.href}
    >
      {props.title}
    </a>
  );
};

export default Button;
