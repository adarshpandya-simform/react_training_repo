import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/todo.store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
