import React from "react";

export interface ButtonProps {
  label: string;
  styles: { [key: string]: string };
}

const Button = (props: ButtonProps) => {
  return <button style={props.styles}>{props.label}</button>;
};

export default Button;
