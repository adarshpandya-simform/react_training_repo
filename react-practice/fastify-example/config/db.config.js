import { config } from "dotenv";
import mongoose from "mongoose";

// accessing env vars
config();

// exporting connectDB helper fn
export const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {}, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("db connected");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
