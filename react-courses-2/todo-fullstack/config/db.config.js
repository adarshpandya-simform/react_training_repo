import { connect } from "mongoose";

// helper function to connect with database
export const connectDB = () => {
  connect(
    process.env.MONGO_URL,
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("db connected");
      }
    }
  );
};
