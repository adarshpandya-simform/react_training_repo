import mongoose from "mongoose";
import { config } from "dotenv";

// accessing env vars
config();

// exporting connectDB helper fn
export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL, {}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("db connected");
    }
  });
};
