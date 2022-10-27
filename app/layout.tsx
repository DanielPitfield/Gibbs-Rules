import "../styles/index.scss";
import { NavBar } from "./NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const formattedDate = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <html lang="en">
      <head>
        <title>{`NCIS Daily Quotes | ${formattedDate}`}</title>
        <meta name="description" content="Daily NCIS quotes" />

        {/* TODO: Update favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <NavBar formattedDate={formattedDate} />
        {children}
      </body>
    </html>
  );
}