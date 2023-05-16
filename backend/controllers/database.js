const mongo = require("mongoose");

const config =
	require("../config/env.json")[process.env.NODE_ENV || "development"].mongo;

mongo.set("strictQuery", true);
mongo
	.connect(config.con_str)
	.then(() => console.log("Connected to MongoDB."))
	.catch((err) => console.log("Could not connect to MongoDB.", err));

const UserSchema = new mongo.Schema(
	{
		_id: String,
		clientId: String,
		uidName: String,
		email: String,
		name: String,
		lastName: String,
		phone: Number,
		addr: String,
	},
	{ timestamps: true }
);

const User = mongo.model("Users", UserSchema);

const getClient = async (clientId) => {
	const client = await Client.findOne({ _id: clientId });
	if (!client) return "no_client";
	return client;
};

module.exports = {
	getClient,
};
