import express from "express";
import cors from "cors";
import path from "path";
import { cwd } from "process";

// defining PORT
const PORT = process.env.PORT || 2000;
// creating express app
const app = express();

app.use(express.json());
// enabling cors
app.use(cors());
// defining static folder
app.use(express.static("../client/build"));

// defining __dirname (package.json containes "type":"module")
const __dirname = cwd();

// accept all get requests and return index.html file
app.get("*", (req, res) => {
  // resolving path for /client/build/index.html
  const filePath = path.resolve(
    __dirname,
    "../",
    "client",
    "build",
    "index.html"
  );
  // sending index.html file
  res.sendFile(filePath);
});

// server listening on {PORT}
app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
