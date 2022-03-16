const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	isMarried: { type: Boolean, required: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
