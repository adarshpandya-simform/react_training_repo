import Head from "next/head";
import styles from "../../styles/Todos.module.css";
import { Card } from "../../src/components";
import { useNormalTodos, useTodos } from "../../src/hooks/";

// ViewTodosPage page renders @ '/todos'
const ViewTodosPage = () => {
  // const { data, isLoading } = useNormalTodos();
  const { data, isLoading } = useTodos();

  return (
    <div>
      <Head>
        <title>Todos App | View Todos</title>
      </Head>
      <h2>View Todos</h2>
      <hr />
      <br />
      <div className={styles["card-container"]}>
        {isLoading && <p>loading...</p>}
        {/* mapping through todos */}
        {!isLoading &&
          data &&
          data.success &&
          data.todos.map((todo) => <Card key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default ViewTodosPage;
