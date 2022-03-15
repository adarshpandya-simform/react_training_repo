import React from "react";
import { useTodos } from "add_todo/useTodos";
import {
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";

const CompletedTodos = () => {
  const { todos, deleteTodoDispatcher, updateTodoDispatcher } = useTodos();

  const handleUpdateTodo = (id, completed) => {
    updateTodoDispatcher({ id, completed });
  };

  const handleDeleteTodo = (id) => {
    deleteTodoDispatcher({ id });
  };

  return (
    <Paper sx={{ mx: 5 }}>
      <Typography sx={{ px: 4, py: 2 }} variant="h5">
        Completed Todos
      </Typography>
      <Divider />
      <List>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <ListItem key={todo.id}>
              <ListItemAvatar>
                <Checkbox
                  checked={todo.completed}
                  onChange={(e) => handleUpdateTodo(todo.id, e.target.checked)}
                />
              </ListItemAvatar>
              <ListItemText primary={todo.title} />
              <Button
                color="error"
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              >
                DELETE
              </Button>
              <ListItemSecondaryAction></ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default CompletedTodos;
