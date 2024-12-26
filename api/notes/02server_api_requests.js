/*
! Server-side API Requests - Making requests from your server w/ Node & Axios
* Here's we're trying to send a GET request to someone else's server and receive a response.

* Using Axios simplifies this process instead of using the 'https' module via Node.
Better error handling and requests is simplified down to just a line or two.

*/

import axios from "axios";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", { activity: response.data });
  } catch (error) {
    res.status(500).send("Failed to fetch. Please try again.")
  }
})

/*
! REST APIs
We've practiced GET at length, but let's now cover the over HTTP Protocol verbs.
* PUT, PATCH look almost exactly the same as the POST example below.
* DELETE takes only two parameters, the URL and the config (as a JS object).


! What makes an API RESTful? <--- Potential Interview Question
  1. It must use standard HTML methods (GET, POST, PATCH, etc.)
  2. It should have a standard data format that it responds with, like JSON. (Responds with JSON)
  3. Clients and servers are completely seperate, not on the same network; allowing each side to scale independently.
  4. Statelessness - Each request from the client to the server it contains all of the information the server needs to respond back.
  Allows the server to serve many clients and requests.
  5. Resource-based - Uses URLs or URIs to find information.

? The worldwide web the biggest example of a RESTful API.
*/

app.post("/", async (req, res) => {
  try {
    const result = await axios.post("URL", body, config);
    //? The route you're sending it to (/thing/{id}/update), the information you're sending { preferences: 'dark mode' }, and the config information, headers, auth, etc.
    res.render("index.ejs", { content: JSON.parse(result.data) })
    res.sendStatus(201)
  } catch (error) {
    res.status(404).send(error.response.data);
  }
})

