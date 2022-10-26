import React from "react";

interface NavBarProps {
  formattedDate: string;
}

export const NavBar = (props: NavBarProps) => {
  return (
    <header>
      <h1>NCIS Daily Quotes</h1>
      <h2>{props.formattedDate}</h2>
    </header>
  );
};
