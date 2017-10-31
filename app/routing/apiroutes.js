var path = require("path");
var people = require("../data/friends.js");
var fs = require("fs");

module.exports = function(app) {

  // Create New Characters - takes in JSON input
  app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newPerson = req.body;

    /*var newPerson = {
      name: req.body.name,
      photoLink: req.body.name,
      scores: req.body["scores[]"];
    };*/

    // We then add the json the user sent to the character array
    /*people.push(newPerson);*/
    /*console.log(newPerson);
    console.log(newPerson.name);
    console.log(newPerson.photoLink);
    console.log(newPerson['scores[]']);*/
    var bestPerson = "";
    var bestScore = 50;

    //get abs
    people.forEach(function(person) {
      var compScore = 0;
      
      //computes the score
      for (var i = 0; i < person.scores.length; i++) {
        compScore += Math.abs(person.scores[i] - newPerson['scores[]'][i]); 
      }

      //compares the comparison of computed score
      //determines who is  best person
      if (compScore < bestScore) {
        bestScore = compScore;
        bestPerson = person;
      }
      console.log(person.name + "\t" + compScore);
    });

    console.log(bestPerson);




    /*console.log(people[people.length - 1].scores);*/

    /*var content = "// People (DATA)\n// =============================================================";
    var exports = "\nmodule.exports = people";*/

    /*console.log(peopleArray);*/
    /*fs.writeFile("app/data/friends.js", JSON.stringify(people), function(err) {
      if (err) throw err;
      console.log("saved!");
    });*/

    // We then display the JSON to the users
    res.json(bestPerson);
  });
};