import React from "react";
import ReactDOM from "react-dom";
import QueryClientWrapper from "data_store/RQWrapper";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import "./index.css";
import UserTable from "./components/UserTable";

const App = () => (
  <div>
    <UserTable />
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
