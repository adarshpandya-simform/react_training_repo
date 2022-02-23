import { useState } from "react";
import { addTodo, GET_TODOS_URL } from "../api/api";
import { Button, TextField } from "@mui/material";
import { mutate } from "swr";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");

  const handleAddTodo = async () => {
    if (title !== "") {
      await addTodo(title);
      mutate(GET_TODOS_URL, null);
      setTitle("");
    } else {
      alert("please enter something before adding");
    }
  };

  const handleEnterKeyPress = (key) => {
    if (key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <br />
      <TextField
        type={"text"}
        label="Enter Todo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        size="small"
        onKeyDown={(e) => handleEnterKeyPress(e.key)}
      />
      <Button
        sx={{ marginLeft: 2 }}
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
      >
        add todo
      </Button>
    </div>
  );
};

export default AddTodoPage;
