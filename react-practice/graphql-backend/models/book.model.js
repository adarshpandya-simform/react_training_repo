import mongoose from "mongoose";

// defining schema for book
const bookSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  id: { type: String, required: true },
});

// creating and exporting bookModel
export const bookModel = mongoose.model("book", bookSchema);
