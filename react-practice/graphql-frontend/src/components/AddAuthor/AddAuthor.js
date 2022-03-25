import { useMutation } from "@apollo/client";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { CREATE_AUTHOR, GET_AUTHORS } from "../../graphql";

// AddAuthor for adding author
const AddAuthor = () => {
  // createAuthor mutation
  const [createAuthor, { loading, error }] = useMutation(CREATE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHORS }],
  });
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");

  // helper fn to handle submit
  const handleSubmit = async () => {
    if (name !== "") {
      createAuthor({ variables: { name } });
      setName("");
      enqueueSnackbar("author added!", { variant: "success" });
    } else {
      enqueueSnackbar("please fill all the asked fields", { variant: "error" });
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

export default AddAuthor;
