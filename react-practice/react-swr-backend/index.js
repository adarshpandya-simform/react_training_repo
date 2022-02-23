import express from "express";
import cors from "cors";
import { router } from "./routes/todo.routes.js";

// setting port
const PORT = process.env.PORT || 2000;

// creating express instance
const app = express();

// applying middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

// attaching routes
app.use("/api", router);

// making server listen on port
app.listen(PORT, () => {
  console.log(`app is running on port : ${PORT}`);
});
