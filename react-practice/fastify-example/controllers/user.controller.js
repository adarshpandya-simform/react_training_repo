import { userModel } from "../models/user.model.js";

// controller function for route: @ /
const getHi = async (_, res) => {
  res.send({ msg: "hi" });
};

// controller function for route: @ /api/users
const getUsers = async (_, res) => {
  const users = await userModel.find({});
  res.send({ success: true, result: { users, total: users.length } });
};

// controller function for route: @ /api/user/:id
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (user !== {}) {
    res.send({ success: true, result: { user } });
  } else {
    res.send({ success: false, result: {} });
  }
};

// controller function for route: @ /api/adduser
const addUser = async (req, res) => {
  const data = req.body;
  const user = new userModel(data);
  const result = await user.save();

  res.send({ success: true, result });
};

export const userController = { getHi, getUsers, addUser, getUser };
