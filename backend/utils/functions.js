// UTILITY FUNCITONS
/**
 * Checks if the input is valid, if not, it returns an error message.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The errors.array() is an array of objects.
 */
const checkInput = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log("BAD REQUEST");
		return res.status(400).send(
			JSON.stringify({
				code: codes.IPS002.code,
				error: errors.array(),
			})
		);
	}

	next();
};

/**
 * Place zero padding for a given num string.
 * @param num number string.
 * @param places zero padding places.
 * @returns string with zedo padding places.
 */
const zeroPad = (num, places) => String(num).padStart(places, "0");

module.exports = { checkInput, zeroPad };
