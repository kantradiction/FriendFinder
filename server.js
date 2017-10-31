// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================
require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);
/*var apiroutes = require("./app/routing/apiroutes");
var htmlroutes = require("./app/routing/htmlroutes");

app.use("/", apiRoutes);
app.use("/", htmlRoutes);*/


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
