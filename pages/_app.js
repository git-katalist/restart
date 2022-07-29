import { ThemeProvider } from "styled-components";

import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";

import { Container } from "../components/Layout/Layout";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Container>
        <Header />
        <div>
          <Component {...pageProps} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
