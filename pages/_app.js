import GlobalStyles from "../components/global-styles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
