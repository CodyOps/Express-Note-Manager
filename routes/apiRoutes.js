//LOAD DATA
//we will link out routes to a series of "data" sources.
//These data sources hold arrays of information on notes-data etc.
const fs = require("fs");
const notesData = require("../db/db.json");

//ROUTING

module.exports = (app) => {
  // Set up load filen return and let us know if there is an error
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data);

    // API ROUTES

    // API route for the notes
    app.get("/api/notes", function (req, res) {
      // Gets the the db.json file and returns the data in json format
      res.json(notes);
    });

    // API post route for the notes
    app.post("/api/notes", function (req, res) {
      // Takes the new note and stores it into the db.json then shows that the new note has been logged
      let newNote = req.body;
      notes.push(newNote);
      updateDb();
      return console.log("Added new note: " + newNote.title);
    });

    // Locates a note with a specific id
    app.get("/api/notes/:id", function (req, res) {
      res.json(notes[req.params.id]);
    });

    // Deletes a note using a specific id
    app.delete("/api/notes/:id", function (req, res) {
      notes.splice(req.params.id, 1);
      updateDb();
      console.log("Deleted note with id of: " + req.params.id);
    });

    //updates the json file when a note is added or deleted
    function updateDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
        if (err) throw err;
        return true;
      });
    }
  });
};
