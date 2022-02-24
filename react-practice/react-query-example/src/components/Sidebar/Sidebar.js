import styles from "./Sidebar.module.css";
import Link from "next/link";

// Sidebar component for showing sidebar on screen
const Sidebar = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["links-container"]}>
        <Link href={"/"}>Home</Link>
        <Link href={"/todos"}>View All Todos</Link>
        <Link href={"/add-todo"}>Add Todo</Link>
      </div>
    </div>
  );
};

export default Sidebar;
