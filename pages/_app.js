import { useEffect } from "react";
import Head from "next/head";
import GlobalStyles from "../components/global-styles";
import jollyFlipDataUri from "../assets/jolly-flip-data-uri";
import jollyFlipHighlightDataUri from "../assets/jolly-flip-highlight-data-uri";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const listener = (e) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", listener, { passive: false });
    return () => {
      document.removeEventListener("touchmove", listener);
    };
  }, []);

  return (
    <div
      css={`
        cursor: url("${jollyFlipDataUri}") 25 15, auto;
        a {
          cursor: url("${jollyFlipHighlightDataUri}") 25 15, auto;
        }
      `}
    >
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
