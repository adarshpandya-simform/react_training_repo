import { authorModel } from "../models/author.model.js";

// helper fn to insert author
export const insertAuthor = async (author) => {
  const newAuthor = new authorModel(author);
  const data = await newAuthor.save();
  return data;
};

// helper fn to get all authors
export const getAuthors = async () => {
  const authors = await authorModel.find({});
  return authors;
};

// helper fn to get an author
export const getAuthor = async (authorId) => {
  const author = await authorModel.findOne({ authorId });
  return author;
};

// helper fn to delete an author
export const deleteAuthor = async (authorId) => {
  const deletedAuthor = await authorModel.findOneAndDelete({ authorId });
  return deletedAuthor;
};

// helper fn to update an author
export const updateAuthor = async (authorId, name) => {
  const updatedAuthor = await authorModel.findOneAndUpdate(
    { authorId },
    { name },
    { new: true }
  );
  return updatedAuthor;
};
