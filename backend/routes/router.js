// EXPRESS IMPORTS
const express = require("express");
const { validationResult, check, query } = require("express-validator");

//CONTROLLLERS MODULES IMPORTS
const {} = require("../controllers/users");

// UTILS MODULES IMPORTS
const codes = require("../utils/codes");
const { checkInput, zeroPad } = require("../utils/functions");

// EXPRESS ROUTER
const router = express.Router();

// CONTROL FUNCTIONS

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

module.exports = router;
