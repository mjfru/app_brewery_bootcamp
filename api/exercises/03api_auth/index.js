import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "mjfru201";
const yourPassword = "verysecretive";
const yourAPIKey = "c8883d14-f2e1-4b27-a257-38eebd374a24";
const yourBearerToken = "b0cbdcc7-57ec-4fa9-b6bc-24b23e90abad";

app.get("/", (req, res) => {
	res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
	//TODO 2: Use axios to hit up the /random endpoint
	//The data you get back should be sent to the ejs file as "content"
	//Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
	try {
		const result = await axios.get(API_URL + "/random");
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/basicAuth", async (req, res) => {
	/*
  TODO 3: Write your code here to hit up the /all endpoint
  Specify that you only want the secrets from page 2
	HINT: This is how you can use axios to do basic auth:
	https://stackoverflow.com/a/74632908
	*/
	try {
		const result = await axios.get(API_URL + "/all", {
			auth: {
				username: "mjfru201",
				password: "verysecretive",
			},
		});
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/apiKey", async (req, res) => {
	try {
		const result = await axios.get(API_URL + "/filter", {
			params: {
				score: 8,
				apiKey: yourAPIKey,
			},
		});
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/bearerToken", async (req, res) => {
	/*
  TODO 5: Write your code here to hit up the /secrets/{id} endpoint
	and get the secret with id of 42
	HINT: This is how you can use axios to do bearer token auth:
	https://stackoverflow.com/a/52645402
  */
	try {
		const result = await axios.get(API_URL + "/secrets/32", {
			headers: {
				Authorization: `Bearer ${yourBearerToken}`,
			},
		});
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		console.log(error.message);
	}
	/*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
