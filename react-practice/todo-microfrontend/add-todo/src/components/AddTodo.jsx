import React, { useState } from "react";
import { TextField, Paper } from "@mui/material";
import { nanoid } from "nanoid";
import { useTodos } from "add_todo/useTodos";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const { addTodoDispatcher, todos, completedTodos, incompleteTodos } =
    useTodos();

  console.log(todos);
  console.log(completedTodos);
  console.log(incompleteTodos);

  const handleAddTodo = () => {
    if (title !== "") {
      const todo = { id: nanoid(), title, completed: false };
      setTitle("");
      addTodoDispatcher(todo);
    } else {
      alert("please enter something before adding");
    }
  };

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Paper sx={{ mx: 5 }}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={(e) => {
          handleKeyPress(e.key);
        }}
        size="small"
        fullWidth
        value={title}
        label="Enter Todo"
        variant="outlined"
      />
    </Paper>
  );
};

export default AddTodo;
