import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "blue",
        padding: "5px",
        borderRadius: "5px",
        color: "white",
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
