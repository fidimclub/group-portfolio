// EXPRESS IMPORTS
const express = require("express");
const { check, query } = require("express-validator");

//CONTROLLLERS MODULES IMPORTS
const { getUser } = require("../controllers/database");

// UTILS MODULES IMPORTS
const codes = require("../utils/codes");
const { checkInput, zeroPad } = require("../utils/functions");

// EXPRESS ROUTER
const router = express.Router();

// CONTROL FUNCTIONS
/**
 * Retrieves an user by  its FirstName
 * @param {*} req Request express object.
 * @param {*} res Response express object.
 * @returns Returns the user object.
 */
const userGet = async (req, res) => {
	try {
		const user = await getUser(req.query.firstName);
		return res
			.status(200)
			.json({ code: codes.FIDIM001.code, message: user });
	} catch (err) {
		return res.status(500).json({ code: codes.FIDIM000, error: err });
	}
};
// ROUTER DEFINITIONS
/**
 * Router DEF
 */
router.use((req, res, next) => {
	console.log("---------------------------------------------------------");
	const date = new Date();
	console.log(
		`Time:  ${date.getFullYear()}-${zeroPad(
			date.getMonth() + 1,
			2
		)}-${zeroPad(date.getDate(), 2)} -- ${zeroPad(
			date.getHours(),
			2
		)}:${zeroPad(date.getMinutes(), 2)}`
	);
	res.setHeader("Content-Type", "application/json");
	next();
});

// ROUTES DEFINITIONS
/**
 * Test enpoint for check the API status.
 */
router.route("/test").get((req, res) => {
	return res
		.status(200)
		.send({ code: codes.FIDIM001.code, message: "GOOD_TEST" });
});

router
	.route("/getUser")
	.get(
		query("firstName", "Missing parameter: firstName").exists(),
		checkInput,
		userGet
	);

module.exports = router;
