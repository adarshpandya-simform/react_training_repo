import {
  Typography,
  IconButton,
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  Divider,
  ListItemAvatar,
  Checkbox,
} from "@mui/material";
import { connectDB } from "../../config/db.config";
import { TodoModel } from "../../models/todo.model";
import { useState } from "react";
import { useSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

// TodosPage component @ /todos to show all the todos
const TodosPage = ({ todos: fetchedTodos, error }) => {
  const [todos, setTodos] = useState(fetchedTodos);
  // extracting enqueueSnackbar
  const { enqueueSnackbar } = useSnackbar();

  // helper fn to update todo on checkbox change
  // (sends axios req /api/updatetodo)
  const handleCheck = async (id, completed) => {
    await axios
      .post(
        "/api/updatetodo",
        { id, completed },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setTodos((prevTodos) => [
            ...prevTodos.map((todo) => {
              if (todo.id === id) {
                todo.completed = completed;
              }
              return todo;
            }),
          ]);
        }
      });
  };

  // helper fn to delete todo on delete icon click
  // (sends axios req /api/deletetodo)
  const handleDelete = async (id) => {
    await axios
      .post(
        "/api/deletetodo",
        { id },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data.success) {
          setTodos((prevTodos) => [
            ...prevTodos.filter((todo) => todo.id !== id),
          ]);
          enqueueSnackbar("todo deleted", { variant: "info" });
        }
      });
  };

  return (
    <div>
      {/* custom Head tag for SEO */}
      <Head>
        <title> ({todos.length}) Todos</title>
      </Head>
      <Typography variant="h4" color={"#1976d2"}>
        All Todos
      </Typography>
      <br />
      {error && <p>unexpected error occured, try again later</p>}
      <List>
        {/* Mapping over todos with material components */}
        {todos.map((todo) => (
          <div key={todo.id}>
            <ListItem>
              <ListItemAvatar>
                <Checkbox
                  color="primary"
                  checked={todo.completed}
                  onChange={(e) => {
                    handleCheck(todo.id, e.target.checked);
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Link href={`/todo/${todo.id}`}>{todo.title}</Link>}
              />
              <ListItemSecondaryAction>
                {/* attaching delete handler on IconButton */}
                <IconButton
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                  color="primary"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

// fetching all todos in getStaticProps
export async function getStaticProps() {
  let todos = [];
  let error = null;

  try {
    // connecting to db
    connectDB();
    // getting all todos
    let unserializedTodos = await TodoModel.find({});
    unserializedTodos.map((todo) => {
      // storing needed info
      todos.push({ id: todo.id, title: todo.title, completed: todo.completed });
    });
    // catching errors
  } catch (err) {
    error = String(err);
  }

  // returing props - todos and error(if any)
  return {
    props: {
      todos,
      error,
    },
    revalidate: 1,
  };
}

export default TodosPage;
