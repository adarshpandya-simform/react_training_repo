import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../src/layout";
import "../styles/globals.css";

// initializing and exporting queryClient
export const queryClient = new QueryClient();

// Wrapping main Component with Layout and QueryClientProvider
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
