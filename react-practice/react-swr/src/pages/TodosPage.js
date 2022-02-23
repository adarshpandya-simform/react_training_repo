import { deleteTodo, GET_TODOS_URL } from "../api/api";
import useSWR, { mutate } from "swr";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const TodosPage = () => {
  const { data, error } = useSWR(GET_TODOS_URL);

  const handleDeleteTodo = async (id) => {
    mutate(
      GET_TODOS_URL,
      {
        ...data,
        todos: data.todos.filter((todo) => todo.id !== id),
      },
      false
    );
    await deleteTodo(id);
  };

  if (!data) {
    return <p>loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error Occured: <code>{JSON.stringify(error)}</code>
      </p>
    );
  }

  return (
    <div>
      <br />
      <List>
        {data.todos.map((todo) => (
          <Paper sx={{ marginBottom: 2 }} variant="outlined">
            <ListItem button key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => {
                    handleDeleteTodo(todo.id);
                  }}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  );
};

export default TodosPage;
