const mongo = require("mongoose");

const config =
	require("../config/env.json")[process.env.NODE_ENV || "development"].mongo;

const User = require("../models/user");

mongo.set("strictQuery", true);
mongo
	.connect(config.con_str)
	.then(() => console.log("Connected to MongoDB."))
	.catch((err) => console.log("Could not connect to MongoDB.", err));

/**
 * Gets an users object.
 * @param {*} firstName User first name.
 * @returns User object.
 */
const getUser = async (firstName) => {
	const user = await User.findOne({ firstName });
	if (!user) return "no_user";
	return user;
};

const getUsersList = async () => {
	const usersList = await User.find();
	if (!usersList) return "no_users_list";
	return usersList;
};

module.exports = {
	getUser,
	getUsersList,
};
