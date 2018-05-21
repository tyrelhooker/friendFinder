// Sets friends data in friends.js to a variable
var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // A GET route with the URL to display JSON of friends from friends.js file
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    console.log("New Human: " + JSON.stringify(req.body));
    var humanScores = req.body.scores;
    var humanScoresArr = [];
    for (var i = 0; i < humanScores.length; i++) {
      humanScoresArr.push(humanScores[i]);
    }

    console.log("humanScoresArr: " + humanScoresArr);
  });
}