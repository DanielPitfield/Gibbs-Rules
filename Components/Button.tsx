import React, { MouseEventHandler } from "react";

interface ButtonProps {
  mode: "destructive" | "accept" | "default";
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`btn ${props.mode} ${props.className || ""}`}
      onClick={(e) => {
        props.onClick?.(e);
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
