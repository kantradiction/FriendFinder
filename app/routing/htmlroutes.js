var path = require("path");

module.exports = function(app) {

  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Get all Friends
  app.get("/api/friends", function(req, res) {
    res.json(characters);
  });
};