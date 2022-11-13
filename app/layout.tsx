import "../public/styles/index.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const formattedDate = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <html lang="en">
      <head>
        <title>{`NCIS Daily Quotes | ${formattedDate}`}</title>
        <meta name="description" content="Daily NCIS quotes" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
