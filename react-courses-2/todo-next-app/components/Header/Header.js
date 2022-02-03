import styles from "./Header.module.css";
import Link from "next/link";

// Header component to render links and logo
const Header = () => {
  return (
    <div className={styles.todo_header}>
      <div className={styles.logo}>
        <Link href="/">Todos</Link>
      </div>
      <div className={styles.menu_links}>
        <Link href={"/todos"}>todos</Link>
        <Link href={"/add-todo"}>add todo</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/contact"}>contact</Link>
      </div>
    </div>
  );
};

export default Header;
