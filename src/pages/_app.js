import Global from "@/globalStyles/";
import { ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import theme from "@/globalStyles/theme";

export default function App({ Component, pageProps }) {
  config.autoAddCss = false;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
