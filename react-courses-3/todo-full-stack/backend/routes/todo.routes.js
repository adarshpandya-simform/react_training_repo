import { Router } from "express";
import { todoController } from "../controllers/todo.controller.js";

/**
 * This file contains all routes for our app
 */

export const router = Router();

router.get("/todos", todoController.getTodos);

router.post("/add-todo", todoController.addTodo);

router.delete("/delete-todo/:id", todoController.deleteTodo);

router.patch("/update-todo/", todoController.updateTodo);
