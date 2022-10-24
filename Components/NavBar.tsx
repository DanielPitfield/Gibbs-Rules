import React from "react";

export const NavBar = () => {
  return (
    <header>
      <h1>NCIS Daily Quotes</h1>
      <h2>{new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit"})}</h2>
    </header>
  );
};
