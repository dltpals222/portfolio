import React from "react";
import { AppProps } from "next/app";

// IMPORT CSS
import "../styles/globals.css";
import "../styles/common.css";
import "../styles/fonts.css";
import "../styles/parallax.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
