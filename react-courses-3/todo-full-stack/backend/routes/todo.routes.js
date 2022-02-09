import { Router } from "express";
import { todoController } from "../controllers/todo.controller.js";

export const router = Router();

router.get("/todos", todoController.getTodos);

router.post("/add-todo", todoController.addTodo);

router.delete("/delete-todo/:id", todoController.deleteTodo);

router.patch("/update-todo/", todoController.updateTodo);
