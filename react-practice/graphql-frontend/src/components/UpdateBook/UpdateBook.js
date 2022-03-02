import { useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHORS, GET_BOOKS, UPDATE_BOOK } from "../../graphql";
import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// UpdateBook: provides interface to update Books
const UpdateBook = () => {
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const { data, error, loading } = useQuery(GET_BOOKS);
  const {
    data: authorData,
    error: authorError,
    loading: authorLoading,
  } = useQuery(GET_AUTHORS);
  // updateBook mutation
  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }, { query: GET_AUTHORS }],
  });
  const [authorId, setAuthorId] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  // helper fn to update books
  const handleUpdate = async () => {
    if (title !== "" && authorId !== "" && bookId) {
      await updateBook({ variables: { bookId, authorId, title } });
      enqueueSnackbar("book update!", { variant: "success" });
      setTitle("");
      setBookId("");
      setAuthorId("");
    } else {
      enqueueSnackbar("please fill all the asked fields", { variant: "error" });
    }
  };

  if (loading || authorLoading) {
    return <CircularProgress color="primary" />;
  }

  if (error || authorError) {
    return <code>{JSON.stringify(error)}</code>;
  }

  return (
    <div>
      <br />
      <br />
      <Select
        value={bookId}
        label="Select Book"
        onChange={(e) => {
          setTitle(e.explicitOriginalTarget.textContent);
          setBookId(e.target.value);
        }}
        size="small"
        fullWidth
      >
        {data.books.map((book) => (
          <MenuItem key={book.bookId} value={book.bookId}>
            {book.title}
          </MenuItem>
        ))}
      </Select>
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
        {authorData.authors.map((author) => (
          <MenuItem key={author.authorId} value={author.authorId}>
            {author.name}
          </MenuItem>
        ))}
      </Select>
      <br />
      <br />
      <TextField
        label="Enter Book Name"
        size="small"
        fullWidth
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <Button
        onClick={handleUpdate}
        fullWidth
        variant="contained"
        color="primary"
      >
        update book
      </Button>
    </div>
  );
};

export default UpdateBook;
