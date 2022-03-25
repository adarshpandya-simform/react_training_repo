import Head from "next/head";
import { useRouter } from "next/router";
import { useNormalTodo, useTodo } from "../../src/hooks";
import { useDeleteTodo } from "../../src/hooks/useDeleteTodo";
import styles from "../../styles/Todo.module.css";

// TodoDetailsPage renders @ /todo/:id (for showing todo details)
const TodoDetailsPage = () => {
  const { query, push } = useRouter();
  // const { data, isLoading } = useNormalTodo(query.id);
  const { data, isLoading } = useTodo(query.id);
  const { mutateAsync } = useDeleteTodo();

  // helper fn for deleting todo
  const handleDeleteTodo = async () => {
    await mutateAsync({ id: query.id });
    push("/todos");
  };

  return (
    <div>
      {!isLoading && data && data.success && (
        <Head>
          <title>Todos App | {data.todo.title}</title>
        </Head>
      )}
      <h2>Todo Details</h2>
      <hr />
      <br />
      {isLoading && <p>loading...</p>}
      {/* rendering todo details */}
      {!isLoading && data && data.success && (
        <div className={styles["todo-details-container"]}>
          <h4>{data.todo.title}</h4>
          <p>{data.todo.description}</p>
        </div>
      )}
      <br />
      <br />
      <button onClick={handleDeleteTodo}>delete todo</button>
    </div>
  );
};

export default TodoDetailsPage;
