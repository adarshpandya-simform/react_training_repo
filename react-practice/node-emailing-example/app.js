import express from "express";
import cors from "cors";
import { sendMail } from "./utils/mailSender.js";

const PORT = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  await sendMail({ emailTo: "apworkforweb@gmail.com", name: "Aditya" });
  return res.json({ message: "app is running", success: false });
});

app.listen(PORT, () => {
  console.log(`app is running on port : ${PORT}`);
});
