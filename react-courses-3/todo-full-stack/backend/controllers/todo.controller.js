import { todoModel } from "../models/todo.model.js";

/**
 * This file containes controller for all routes
 */

// controller for adding todo
const addTodo = async (req, res) => {
  const { title } = req.body;
  const savedTodo = new todoModel({ title, completed: false });
  const data = await savedTodo.save();
  return res.json({ success: true, data });
};

// controller for getting todos
const getTodos = async (req, res) => {
  const todos = await todoModel.find({});
  return res.json({ success: true, data: todos });
};

// controller for deleting todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const data = await todoModel.findByIdAndDelete(id);
  return res.json({ success: true, data });
};

// controller for updating todo
const updateTodo = async (req, res) => {
  const { title, completed, id } = req.body;
  const data = await todoModel.findByIdAndUpdate(
    id,
    { title, completed },
    { new: true }
  );
  return res.json({ success: true, data });
};

export const todoController = { addTodo, getTodos, deleteTodo, updateTodo };
