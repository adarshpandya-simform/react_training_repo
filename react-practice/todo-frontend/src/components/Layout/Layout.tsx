import { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
