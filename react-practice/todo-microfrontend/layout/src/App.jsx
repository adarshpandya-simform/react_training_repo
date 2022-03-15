import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReduxWrapper from "add_todo/ReduxWrapper";

import "./index.css";

const App = () => (
  <div>
    <Header />
    <Footer />
  </div>
);
ReactDOM.render(
  <ReduxWrapper>
    <App />
  </ReduxWrapper>,
  document.getElementById("app")
);
