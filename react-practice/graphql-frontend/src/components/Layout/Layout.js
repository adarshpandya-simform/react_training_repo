import { Paper } from "@mui/material";
import { Footer, Header } from "..";
import "./Layout.css";

// Layout component: creates layout for all routes
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        <Paper
          elevation={5}
          sx={{ height: 450, width: 700, padding: 1, overflow: "scroll" }}
        >
          {children}
        </Paper>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
