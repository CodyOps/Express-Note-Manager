//DEPENDENCIES
//Added the npm packages that will give our server helpful functionality

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
