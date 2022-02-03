import { SnackbarProvider } from "notistack";
import Layout from "../layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // Wrapping Component with Snackbar provider and Layout
    <Layout>
      <SnackbarProvider maxSnack={2}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Layout>
  );
}

export default MyApp;
