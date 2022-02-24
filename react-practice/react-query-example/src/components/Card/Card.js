import styles from "./Card.module.css";
import { trimText } from "../../utils/textTrim";
import Link from "next/link";

// Card component for showing list of todos
const Card = ({ todo }) => {
  return (
    <Link href={`/todo/${todo._id}`}>
      <div className={styles["card"]}>
        <h4>{todo.title}</h4>
        <span>{trimText(todo.description)}</span>
      </div>
    </Link>
  );
};

export default Card;
