import mongoose, { CallbackError } from "mongoose";
import { config } from "dotenv";

config();

// helper fn to connect to mongo db
export const connectDB = (): void => {
	if (process.env.MONGO_URL) {
		mongoose.connect(process.env.MONGO_URL, {}, (err: CallbackError) => {
			if (err) {
				console.error(String(err));
			} else {
				console.log("db connected");
			}
		});
	}
};
