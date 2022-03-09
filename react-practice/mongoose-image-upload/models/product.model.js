import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

export const productModel = mongoose.model("Product", productSchema);
