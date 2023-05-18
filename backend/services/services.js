// AXIOS IMPORT
const axios = require("axios");

// CONFIG IMPORT
const config =
	require("../config/env.json")[process.env.NODE_ENV || "development"].pronty;

// UTILITY FUNCITONS
/**
 * Interface to AXIOS GET.
 * @param {String} url Request URL.
 * @returns Request data.
 */
const getRequest = (url) => {
	return axios.get(url, {
		headers: {
			Authorization: config.api_key,
		},
	});
};

/**
 * Interface to AXIOS POST.
 * @param {String} url Request URL.
 * @param {{data:{}}} body Body object
 * @returns Request data.
 */
const postRequest = (url, body) => {
	return axios.post(url, body, {
		headers: {
			Authorization: config.api_key,
		},
		validateStatus: (status) => {
			return status <= 500;
		},
	});
};

// FIDIM 3RD PART API SERVICES

// MODULE EXPORTS
module.exports = {};
