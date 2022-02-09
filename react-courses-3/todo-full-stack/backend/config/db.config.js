import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDB = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("connected to DB");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
