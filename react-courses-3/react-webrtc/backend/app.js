import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

// setting PORT
const PORT = process.env.PORT || 2000;
// creating app instance
const app = express();

// passing app instance to server
const server = createServer(app);

// attaching socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  },
});

// express middlewares
app.use(express.json());
app.use(cors());

//
app.get("/", (req, res) => {
  res.send("server is running");
});

// socket events
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("call ended");
  });

  socket.on("call-user", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("call-user", { signalData, from, name });
  });

  socket.on("answer-call", ({ to, signalData }) => {
    io.to(to).emit("call-accepted", signalData);
  });
});

// making server listen on PORT
server.listen(PORT, () => {
  console.log(`server is running on : {${PORT}}`);
});
