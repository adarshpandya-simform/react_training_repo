import {
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Paper,
  Grow,
  Typography,
} from "@mui/material";
import { useTodos } from "../../hooks/useTodos";
import { Delete } from "@mui/icons-material";
import { useDarkMode } from "../../hooks/";
import "./DisplayTodo.css";

// DisplayTodo component for displaying all todos
const DisplayTodo = () => {
  // extracting state and dispatchers from useTodos()
  const { todos, deleteTodoDispatcher, checkTodoDispatcher } = useTodos();
  // getting the current theme
  const { mode } = useDarkMode();

  // helper fn to delete todo
  const handleDeleteTodo = (id) => {
    deleteTodoDispatcher(id);
  };

  // helper fn to check/update todo
  const handleCheckTodo = (id, completed) => {
    checkTodoDispatcher(id, completed);
  };

  return (
    <div className="todo-list-container">
      {/* conditionally rendering no todos msg */}
      {todos.length === 0 && (
        <p className="empty-todos">No Todos! Enjoy Your Day!!!</p>
      )}

      {/* rendering todo list */}
      <List>
        {todos.map((todo) => (
          <Grow in={true} unmountOnExit={true}>
            <Paper
              className={`todo-item ${mode === "dark" ? "dark-card" : ""}`}
              key={todo.id}
            >
              <ListItem>
                <ListItemAvatar>
                  <Checkbox
                    value={todo.completed}
                    onChange={(e) => {
                      handleCheckTodo(todo.id, e.target.checked);
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography color={todo.completed ? "GrayText" : ""}>
                      {todo.title}
                    </Typography>
                  }
                />
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
          </Grow>
        ))}
      </List>
    </div>
  );
};

export default DisplayTodo;
