import { useMutation, useQuery } from "@apollo/client";
import { Button, CircularProgress, MenuItem, Select } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { DELETE_BOOK, GET_BOOKS } from "../../graphql";

// DeleteBook : provides interface to delete book
const DeleteBook = () => {
  const [bookId, setBookId] = useState("");
  const { data, error, loading } = useQuery(GET_BOOKS);
  // deleteBook mutation
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  const { enqueueSnackbar } = useSnackbar();

  // helper fn to delete book
  const handleDelete = async () => {
    if (bookId !== "") {
      await deleteBook({ variables: { bookId } });
      setBookId("");
      enqueueSnackbar("book deleted!", { variant: "success" });
    } else {
      enqueueSnackbar("please select book to delete", { variant: "error" });
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
      <Select
        value={bookId}
        label="Select Book"
        aria-label="select book"
        onChange={(e) => {
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
      <Button
        onClick={handleDelete}
        fullWidth
        variant="contained"
        color="primary"
      >
        delete book
      </Button>
    </div>
  );
};

export default DeleteBook;
