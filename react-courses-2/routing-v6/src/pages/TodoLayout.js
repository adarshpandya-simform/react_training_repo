import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

// TodoLayout component
const TodoLayout = () => {
  // rendering component with <Outlet/>
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default TodoLayout;
