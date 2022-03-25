import type { AppProps } from "next/app";
import "../styles/globals.css";
import { DarkThemeProvider } from "../context/DarkModeContext";
import { SnackbarProvider } from "notistack";

// wrapping Component with various providers
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <DarkThemeProvider>
      <SnackbarProvider maxSnack={4}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </DarkThemeProvider>
  );
};

export default MyApp;
