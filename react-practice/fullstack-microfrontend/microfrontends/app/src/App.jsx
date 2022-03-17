import React from "react";
import ReactDOM from "react-dom";
import Header from "layout/Header";
import Footer from "layout/Footer";
import ChakraWrapper from "layout/ChakraWrapper";
import QueryClientWrapper from "data_store/RQWrapper";
import AddUser from "add_user/AddUser";
import UserTable from "users/UserTable";
import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <br />
    <AddUser />
    <br />
    <UserTable />
    <br />
    <Footer />
  </div>
);

ReactDOM.render(
  <ChakraWrapper>
    <QueryClientWrapper>
      <App />
    </QueryClientWrapper>
  </ChakraWrapper>,
  document.getElementById("app")
);
