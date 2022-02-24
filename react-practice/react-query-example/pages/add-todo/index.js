import Head from "next/head";
import { InputTodo } from "../../src/components";

// AddTodoPage renders @ '/add-todo'
const AddTodoPage = () => {
  return (
    <div>
      <Head>
        <title>Todos App | Add Todos</title>
      </Head>
      <h2>Add Todo</h2>
      <hr />
      <br />
      {/* rendering InputTodo component*/}
      <InputTodo />
    </div>
  );
};

export default AddTodoPage;
