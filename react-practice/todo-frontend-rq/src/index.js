import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import "./index.css";
import { queryClient } from "./helpers";

// Wrapping App with QueryClientProvider and BrowserRouter
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);
