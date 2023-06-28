import React from "react";

interface MyAppType {
  Component: JSX.ElementType;
  pageProps: [];
}

function MyApp({ Component, pageProps }: MyAppType) {
  return <Component {...pageProps} />;
}

export default MyApp;
