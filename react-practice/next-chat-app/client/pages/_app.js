import { UserContextProvider } from "../context/UserContext";
import Layout from "../layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </Layout>
  );
}

export default MyApp;
