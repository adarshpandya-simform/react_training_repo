import { useMutation, useQuery } from "@apollo/client";
import { Button, CircularProgress, MenuItem, Select } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { DELETE_AUTHOR, GET_AUTHORS } from "../../graphql";

// DeleteAuthor : provides interface to delete author
const DeleteAuthor = () => {
  const [authorId, setAuthorId] = useState("");
  const { data, error, loading } = useQuery(GET_AUTHORS);
  // deleteAuthor mutation
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
  });
  const { enqueueSnackbar } = useSnackbar();

  // helper fn to delete author
  const handleDelete = async () => {
    if (authorId !== "") {
      await deleteAuthor({ variables: { authorId } });
      setAuthorId("");
      enqueueSnackbar("author deleted!", { variant: "success" });
    } else {
      enqueueSnackbar("please select author to delete", { variant: "error" });
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
        onClick={handleDelete}
        fullWidth
        variant="contained"
        color="primary"
      >
        delete author
      </Button>
    </div>
  );
};

export default DeleteAuthor;
