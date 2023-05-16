/**
 * FIDIM GROUP PORTFOLIO API
 */

// Imports
const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
require("./controllers/database");

// API configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const port =
	require("./config/env.json")[process.env.NODE_ENV || "development"].server
		.http.port;

// Running API
app.listen(port, () => console.log(`Listening on port ${port}`));
