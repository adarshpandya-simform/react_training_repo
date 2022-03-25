import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content">{children}</div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};
