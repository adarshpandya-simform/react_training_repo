import { Sidebar } from "../components";
import styles from "./Layout.module.css";

// Layout Component: to add sidebar in Layout with children
const Layout = ({ children }) => {
  return (
    <div className={styles["layout-parent"]}>
      <Sidebar />
      <div className={styles["layout-content"]}>{children}</div>
    </div>
  );
};

export default Layout;
