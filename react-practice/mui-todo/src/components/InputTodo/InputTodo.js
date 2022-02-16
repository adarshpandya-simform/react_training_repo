import { TextField, Button, IconButton, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useDarkMode, useTodos } from "../../hooks";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import "./InputTodo.css";

// InputTodo component for ading todos
const InputTodo = () => {
  // extracting state and dispatchers from hooks
  const { addTodoDispatcher } = useTodos();
  const { mode, toggleMode } = useDarkMode();
  // helper states
  const [title, setTitle] = useState("");
  const [isError, setIsError] = useState(false);

  // helper fn for adding todo
  const handleAddTodo = () => {
    if (title !== "") {
      addTodoDispatcher(title);
      setTitle("");
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // helper fn for Enter key press
  const handleKeyPress = (key) => {
    if (key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-input-container">
      <TextField
        type={"text"}
        value={title}
        size="small"
        label="Enter Todo"
        onChange={({ target: { value } }) => setTitle(value)}
        onKeyUp={({ key }) => {
          handleKeyPress(key);
        }}
        className="todo-input"
      />
      <Button
        className="todo-submit-button"
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
      >
        add todo
      </Button>
      {/* rendering theme mode icon button */}
      <IconButton className="todo-darkmode-button" onClick={toggleMode}>
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      {/* alert snackbar */}
      <Snackbar
        open={isError}
        autoHideDuration={6000}
        onClose={() => {
          setIsError(false);
        }}
      >
        <Alert
          variant="filled"
          onClose={() => {
            setIsError(false);
          }}
          severity="error"
        >
          todo cannot be empty!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default InputTodo;
