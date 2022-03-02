import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../graphql/queries";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { CREATE_BOOK, GET_BOOKS } from "../../graphql";

// AddAuthor for adding book
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { data, loading, error } = useQuery(GET_AUTHORS);
  // createBook mutation
  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  const { enqueueSnackbar } = useSnackbar();

  // helper fn to handle submit
  const handleSubmit = async () => {
    if (title !== "" && authorId !== "") {
      await createBook({ variables: { authorId, title } });
      setAuthorId("");
      setTitle("");
      enqueueSnackbar("book added!", { variant: "success" });
    } else {
      enqueueSnackbar("please provide asked details", { variant: "error" });
    }
  };

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  if (error) {
    return <code>{JSON.stringify(error)}</code>;
  }

  return (
    <div>
      <br />
      <br />
      <TextField
        label="Enter Book Title"
        size="small"
        fullWidth
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <Select
        value={authorId}
        label="Select Author"
        onChange={(e) => {
          setAuthorId(e.target.value);
        }}
        size="small"
        fullWidth
      >
        {data.authors.map((author) => (
          <MenuItem key={author.authorId} value={author.authorId}>
            {author.name}
          </MenuItem>
        ))}
      </Select>
      <br />
      <br />
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        color="primary"
      >
        submit
      </Button>
    </div>
  );
};

export default AddBook;
