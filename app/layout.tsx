import "../public/styles/index.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Daily Quotes</title>
        <meta name="description" content="Daily quotes" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
