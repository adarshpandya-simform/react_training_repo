import { userController } from "../controllers/user.controller.js";

// attaching controllers to their respective route with proper method
export const routes = [
  {
    method: "GET",
    url: "/api",
    handler: userController.getHi,
  },
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getUsers,
  },
  {
    method: "GET",
    url: "/api/user/:id",
    handler: userController.getUser,
  },
  {
    method: "POST",
    url: "/api/adduser",
    handler: userController.addUser,
  },
];
