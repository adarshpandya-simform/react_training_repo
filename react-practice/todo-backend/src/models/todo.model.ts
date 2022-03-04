import { Schema, model, Model } from "mongoose";
import { ITodo } from ".";

// defining schema for todo
const todoSchema: Schema<ITodo> = new Schema<ITodo>({
	title: { type: String, required: true },
	description: { type: String, required: true },
	completed: { type: Boolean, default: false, required: true },
});

// creating and exporting todoModel
export const todoModel: Model<ITodo> = model<ITodo>("todo", todoSchema);
