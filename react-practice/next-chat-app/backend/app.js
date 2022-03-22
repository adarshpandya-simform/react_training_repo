import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 2000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "api is running" });
});

server.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
