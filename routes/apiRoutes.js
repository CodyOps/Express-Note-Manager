//LOAD DATA
//we will link out routes to a series of "data" sources.
//These data sources hold arrays of information on notes-data etc.

const notesData = require("../db/db.json");

//ROUTING

module.exports = (app) => {
  //API GET Requests
  //Below code handles when a user "visits" a page.
  //In each of the cases below the user visits a link

  app.get("/api/notes", (req, res) => res.json(notesData));

  //API POST REQUESTS
  //Below code handles when a user submits a note and thus submits data to the server.
  //In each of the cases below, when a user submits form data (JSON object), the JSON is pushed to the appropriate JS Array
  //Request --> Server --> Saves data to notesData array

  app.post("/api/notes", (req, res) => {
    //Our server will respond to requests and let the user know if they have a note or not.
    //It will do this by sending out the value "true" have a note.
    //req.body is available since we are using the body parsing middleware
    if (notesData.length.length < 10) {
      notesData.push(req.body);
      res.json(true);
    } else {
      res.json(false);
    }
  });

  //Code to clear out note if desired

  app.post("/api/clear", (req, res) => {
    //Empty out the arrays of the data
    notesData.length = 0;

    res.json({ ok: true });
  });
};
