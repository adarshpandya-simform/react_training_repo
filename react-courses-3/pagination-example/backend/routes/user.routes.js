import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

// exportinng userRouter
export const userRouter = Router();

// handling getUsers request @ /api/users
userRouter.get("/", UserController.getUsers);
