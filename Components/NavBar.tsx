import Link from "next/link";
import React from "react";

export const NavBar = () => {
  const pageLinks: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Gibbs", path: "/Gibbs" },
  ];

  return (
    <header>
      <h1>Gibbs Rules</h1>

      <ul className="navbar-links-wrapper">
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.name}>
              <Link href={pageLink.path}>
                <a>{pageLink.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
