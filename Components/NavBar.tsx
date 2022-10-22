import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <header>
      <h1>Gibbs Rules</h1>

      <ul className="navbar-links-wrapper">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Gibbs">
            <a>Gibbs</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
