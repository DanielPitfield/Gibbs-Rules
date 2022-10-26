import "../styles/index.scss";
import Head from "next/head";
import { NavBar } from "./NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const formattedDate = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <html lang="en">
      <Head>
        <title>{`NCIS Daily Quotes | ${formattedDate}`}</title>
        <meta name="description" content="Daily NCIS quotes" />

        {/* TODO: Update favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar formattedDate={formattedDate} />

      <body>{children}</body>
    </html>
  );
}
