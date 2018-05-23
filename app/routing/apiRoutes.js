// Sets friends data in friends.js to a variable
var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // A GET route with the URL to display JSON of friends from friends.js file
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    console.log("New Human: " + JSON.stringify(req.body));
    var newHuman = req.body;
    var humanScores = newHuman.scores;
    var totalDiffArr = []
    var lowest = 51;
    var matchName;
    var matchPhoto;

    for (var i = 0; i < friendsData.length; i++) {
      var totalDiff = 0;
      for (var j = 0; j < humanScores.length; j++) {
        totalDiff += Math.abs(Number(friendsData[i].scores[j]) - Number(humanScores[j]));
        // totalDiff = totalDiff + diffCounter;
      }
      console.log(totalDiff);

      if (totalDiff < lowest) {
        lowest = totalDiff;
        matchName = friendsData[i].name;
        matchPhoto = friendsData[i].photo;
        console.log(matchName);
        console.log(matchPhoto);
      }
    }

    var match = {
      name: matchName,
      photo: matchPhoto
    }
    console.log(match);
    res.json(match);



  });
}