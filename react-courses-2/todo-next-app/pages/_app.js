import { TodoProvider } from "../context/TodoContext";
import Layout from "../layout/Layout";
import "../styles/globals.css";

// index component wrapped with Provider and Layout
function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoProvider>
  );
}

export default MyApp;
