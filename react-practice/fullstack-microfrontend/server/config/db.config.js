const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = () => {
	mongoose.connect(process.env.MONGO_URL, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("connected to db!");
		}
	});
};

module.exports = connectDB;
