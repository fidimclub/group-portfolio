# BACKEND API FOR FIDIM GROUP PORTFOLIO

In this repository is hosted the FIDIM GROUP PORTFOLIO backend.

It has been developed using NODE JS v18.12.1

<br/>

## Installation 💻

Clone the repository and install the npm packages.

```bash
npm install
```

Run the application.

```bash
npm start
```

<br/>

## Project structure 🏢

This project is divide in 6 folders:

1. config
2. controllers
3. node_modules (appears when you install the project)
4. routes
5. services
6. utils

<br/>

### Config folder 📁

It contains the env.json file, that file is used for start configuration such as exposed PORT, externals services tokens, and more.

<br/>

### Controllers folder 📁

It contains all the controllers files for defining the structures of the DB or for implementing the api logic.

<br/>

### Node_modules 📁

It contains all NPM modules required for the API APP.

<br/>

### Routes 📁

It contains the router definition and the services endpoints exposed by the API.

<br/>

### Services 📁

It contains the logic for consumning external services.

<br/>

### Utils 📁

It contains utility functions or definitions for the API.

<br/>

## Project response object shape 💡

The API has the next response object shape:

When your response is OK and no error is thrown:

```javascript
{code: "CODE_VALUE", message: "MESSAGE_VALUE"}
```

When your response has an error:

```javascript
{code: "CODE_VALUE", error: "ERROR_VALUE"}
```

All the responses codes are in utils/codes file, if you need to add more codes you are free to added following the next format: FIDIM\*\*\*, you can select an integer between 000 and 999, take in account that you should typed with zero lead format and in STRING type value.
For exaple "FIDIM001" is for OK.

</br>

## Router functions format ⚒

The router file has a defined format for ROUTE functions, any new endpoint has to follow the next format:

```javascript
router
	.route("/getTransaction")
	.get(
		query("transactionId", "Missing parameter: transactionId").exists(),
		query("clientId", "Missing parameter: clientId").exists(),
		checkInput,
		value_function
	);
```

The QUERY funtion is to validate query parameters, for BODY parametes you need to use check() function:

```javascript
router
	.route("/tcWidget")
	.post(
		check("trCode", "Missing Parameter: trCode").exists(),
		checkInput,
		tcWidget
	);
```

The check input function is used to return a proper error when the REQ miss a param.
