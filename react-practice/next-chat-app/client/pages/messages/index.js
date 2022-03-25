import {
  Box,
  IconButton,
  InputAdornment,
  ListItem,
  OutlinedInput,
} from "@mui/material";
import { useUser } from "../../context/UserContext";
import { SendOutlined } from "@mui/icons-material";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:2000/");

const MessagePage = () => {
  const { name, roomId } = useUser();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("new_msg", ({ message, name, roomId: upcomingRoomId }) => {
      if (upcomingRoomId === roomId) {
        setMessages((prevMessages) => [...prevMessages, { name, message }]);
      }
    });
  }, []);

  const handleSendMsg = () => {
    if (message !== "") {
      socket.emit("send_msg", { message, roomId, name });
      setMessage("");
    } else {
      console.log("please enter some msg before sending");
    }
  };

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      handleSendMsg();
    }
  };

  return (
    <Box height={"600px"} p={2} display="flex" flexDirection={"column"}>
      <Box flex={11} overflow={"scroll"}>
        {messages.map((msg) => (
          <>
            {msg.name === name ? (
              <div className="chat-bubble me">
                <p>{msg.message}</p>
              </div>
            ) : (
              <div className="chat-bubble others">
                <p>{msg.message}</p>
              </div>
            )}
          </>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
      >
        <OutlinedInput
          placeholder="Type Your msg here..."
          size={"small"}
          autoFocus={true}
          value={message}
          fullWidth
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyPress(e.key);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSendMsg} color="primary">
                <SendOutlined />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </Box>
  );
};

export default MessagePage;
