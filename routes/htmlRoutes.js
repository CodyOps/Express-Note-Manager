//DEPENDENCIES
//We need to include the path packages to get the correct file path for out html
const fs = require("fs");
const path = require("path");

//ROUTING

module.exports = (app) => {
  //HTML GET requests
  //Below code handles when a user visits a page.
  //In each of the cases below the user is shown an HTML page of the content

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
