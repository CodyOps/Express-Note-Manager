//DEPENDENCIES
//Added the npm packages that will give our server helpful functionality
const fs = require("fs");
const express = require("express");

//EXPRESS CONFIGURATION
//Set up the basic properties of the express server and tells node we are creating an express server

const app = express();

//Sets and inital port
const PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
//points our server to a series of "route" files.
//These routes give our server a map of how to respond when uses visit or request data from the various urls

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER
//The code effectively starts out server
//will let us know in the terminal when the app is listening

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
