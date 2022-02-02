import { Button, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import Head from "next/head";

// AddTodoPage @ /add-todo to add todos
const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  // helper function to addTodo (sends axios req /api/addtodo)
  const handleSubmit = async () => {
    if (title !== "") {
      // api call
      await axios
        .post(
          "/api/addtodo",
          {
            id: nanoid(),
            title,
            completed: false,
          },
          {
            headers: { "Content-Type": "appplication/json" },
          }
        )
        .then((res) => {
          if (res.data.success) {
            //cleanup
            setTitle("");
            // notification
            enqueueSnackbar("todo added!", { variant: "success" });
          }
        });
    } else {
      // notification
      enqueueSnackbar("please enter something before adding!", {
        variant: "error",
      });
    }
  };

  return (
    <div>
      {/* custom Head tag for SEO */}
      <Head>
        <title>Add Todos in list</title>
      </Head>
      <Typography variant="h4" color={"#1976d2"}>
        Add Todo
      </Typography>
      <br />
      {/* TextField component to input todo */}
      <TextField
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        label="Enter Todo"
        color="primary"
        size="small"
      />
      <br />
      <br />
      {/* attaching onClick handler on button */}
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodoPage;
