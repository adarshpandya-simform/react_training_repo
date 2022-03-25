import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { theme } from "./theme/theme";
import Footer from "./components/Footer";
import QueryClientWrapper from "data_store/RQWrapper";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <QueryClientWrapper>
      <App />
    </QueryClientWrapper>
  </ChakraProvider>,
  document.getElementById("app")
);
