import { todoModel } from "../models/todo.model.js";

const addTodo = async (req, res) => {
  const { title } = req.body;
  const savedTodo = new todoModel({ title, completed: false });
  const data = await savedTodo.save();
  return res.json({ success: true, data });
};

const getTodos = async (req, res) => {
  const todos = await todoModel.find({});
  return res.json({ success: true, data: todos });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const data = await todoModel.findByIdAndDelete(id);
  return res.json({ success: true, data });
};

const updateTodo = async (req, res) => {
  const { title, completed, id } = req.body;
  const data = await todoModel.findByIdAndUpdate(id, { title, completed });
  return res.json({ success: true, data });
};

export const todoController = { addTodo, getTodos, deleteTodo, updateTodo };
