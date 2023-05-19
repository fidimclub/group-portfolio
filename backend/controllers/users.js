// USERS CONTROLLERS FUNCTIONS

const router = require("express").Router();
const { getUser } = require("./database");

router.route("/getUser").get((req, res, next) => {
	query("firstName", "Missing parameter: firstName").exists(),
		checkInput,
		getUser;
});

module.exports = {};
