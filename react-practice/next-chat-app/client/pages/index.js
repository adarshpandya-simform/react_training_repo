import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useUser } from "../context/UserContext";

export default function Home() {
  const { name, setName, roomId, setRoomId } = useUser();
  const { push } = useRouter();

  const handleValidation = () => {
    if (name !== "" && roomId !== "") {
      push("/messages");
    } else {
      alert("please enter asked details");
    }
  };

  return (
    <Box p={2}>
      <br />
      <TextField
        value={name}
        variant={"outlined"}
        fullWidth
        size="small"
        label="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <TextField
        value={roomId}
        variant={"outlined"}
        fullWidth
        size="small"
        label="Enter Room ID"
        onChange={(e) => setRoomId(e.target.value)}
      />
      <br />
      <br />
      <Button
        fullWidth
        onClick={handleValidation}
        variant="contained"
        color="primary"
      >
        Go To Chat Room
      </Button>
    </Box>
  );
}
