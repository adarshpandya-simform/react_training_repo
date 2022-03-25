import React from "react";
import ReactDOM from "react-dom";
import QueryClientWrapper from "data_store/RQWrapper";
import AddUser from "./components/AddUser";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import "./index.css";

const App = () => (
  <div className="container">
    <AddUser />
  </div>
);

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <QueryClientWrapper>
      <App />
    </QueryClientWrapper>
  </ChakraProvider>,
  document.getElementById("app")
);
