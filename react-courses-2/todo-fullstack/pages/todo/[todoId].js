import { Typography } from "@mui/material";
import { connectDB } from "../../config/db.config";
import { TodoModel } from "../../models/todo.model";
import Head from "next/head";

// TodoDetailsPage component @ /todo/{id} to show
// particular todo details
const TodoDetailsPage = ({ todo, error }) => {
  return (
    <div>
      {/* custom Head tag for SEO */}
      <Head>
        <title>{todo.title}</title>
        <meta name="description" content={todo.title}></meta>
      </Head>
      <Typography variant="h4" color={"#1976d2"}>
        All Todos
      </Typography>
      <br />
      {/* checking for error */}
      {error && <p>unexpected error occured, please try again</p>}
      {/* rendering information */}
      <Typography variant="body1">Id: {todo.id}</Typography>
      <Typography variant="body1">Title: {todo.title}</Typography>
      <Typography variant="body1">
        Completion Status: {JSON.stringify(todo.completed)}
      </Typography>
    </div>
  );
};

// fetching paths
export async function getStaticPaths() {
  let todos = [];
  let error = null;

  try {
    // connecting to db and fetching data
    connectDB();
    let unserializedTodos = await TodoModel.find({});
    unserializedTodos.map((todo) => {
      todos.push({ id: todo.id, title: todo.title, completed: todo.completed });
    });
  } catch (err) {
    error = String(err);
  }
  // returning paths
  return {
    fallback: false,
    paths: todos.map((todo) => ({ params: { todoId: todo.id } })),
  };
}

// fetching todo based on path with context.params
export async function getStaticProps(context) {
  let todo = {};
  let error = null;

  try {
    // connecting to db and fetching data
    connectDB();
    let unserializedTodos = await TodoModel.find({ id: context.params.todoId });
    unserializedTodos.map((un_todo) => {
      todo = {
        id: un_todo.id,
        title: un_todo.title,
        completed: un_todo.completed,
      };
    });
    // checking for errors
  } catch (err) {
    error = String(err);
  }
  // returning props todo and error (if any)
  return {
    props: {
      todo,
      error,
    },
    revalidate: 1,
  };
}

export default TodoDetailsPage;
