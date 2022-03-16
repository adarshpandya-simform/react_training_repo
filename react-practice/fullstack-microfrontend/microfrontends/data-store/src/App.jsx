import React from "react";
import ReactDOM from "react-dom";
import QueryClientWrapper from "data_store/RQWrapper";
import "./index.css";

const App = () => {
  return <div className="container"></div>;
};

ReactDOM.render(
  <QueryClientWrapper>
    <App />
  </QueryClientWrapper>,
  document.getElementById("app")
);
