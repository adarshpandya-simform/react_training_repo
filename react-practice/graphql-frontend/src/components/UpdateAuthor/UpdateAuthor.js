import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { GET_AUTHORS, UPDATE_AUTHOR } from "../../graphql";

// UpdateAuthor: provides interface to update Author
const UpdateAuthor = () => {
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { data, loading, error } = useQuery(GET_AUTHORS);
  // updateAuthor mutation
  const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
  });
  const { enqueueSnackbar } = useSnackbar();

  // helper fn to update author
  const handleUpdate = async () => {
    if (name !== "") {
      await updateAuthor({ variables: { authorId, name } });
      setAuthorId("");
      setName("");
      enqueueSnackbar("author updated!", { variant: "success" });
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
      <Select
        value={authorId}
        label="Select Author"
        onChange={(e) => {
          setName(e.explicitOriginalTarget.textContent);
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
      <TextField
        label="Enter Author Name"
        size="small"
        fullWidth
        value={name}
        onChange={(e) => {
          setName(e.target.value);
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
        update author
      </Button>
    </div>
  );
};

export default UpdateAuthor;
