import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils";
import { Layout } from "./components";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import "./index.css";

// Wrapping up App with Router and Providers and Layout
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <SnackbarProvider max={4}>
          <ThemeProvider theme={theme}>
            <Layout>
              <App />
            </Layout>
          </ThemeProvider>
        </SnackbarProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
