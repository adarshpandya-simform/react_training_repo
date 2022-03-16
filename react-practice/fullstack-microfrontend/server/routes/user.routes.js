const { Router } = require("express");
const userModel = require("../models/user.model");

const userRouter = Router();

userRouter.get("/users", async (req, res) => {
	const users = await userModel.find({});
	return res.json({ success: true, users });
});

userRouter.get("/user/:id", async (req, res) => {
	const { id } = req.params;
	const user = await userModel.findById(id);
	return res.json({ success: true, user });
});

userRouter.delete("/delete-user/:id", async (req, res) => {
	const { id } = req.params;
	const user = await userModel.findByIdAndDelete(id, { new: true });
	return res.json({ success: true, user });
});

userRouter.post("/add-user", async (req, res) => {
	const { name, surname, isMarried } = req.body;
	const newUserObj = { name, surname, isMarried };
	const newUserData = new userModel(newUserObj);
	const user = await newUserData.save();
	return res.json({ success: true, user });
});

userRouter.patch("/update-marital-status", async (req, res) => {
	const { id, isMarried } = req.body;
	const user = await userModel.findByIdAndUpdate(
		id,
		{ isMarried },
		{ new: true }
	);
	return res.json({ success: true, user });
});

module.exports = userRouter;
