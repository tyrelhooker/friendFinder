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
    var lowest = 50;
    var matchName;
    var matchPhoto;

    for (var i = 0; i < friendsData.length; i++) {
      var totalDiff = 0;
      for (var j = 0; j < humanScores.length; j++) {
        totalDiff += Math.abs(Number(friendsData[i].scores[j]) - Number(humanScores[j]));
        // totalDiff = totalDiff + diffCounter;
      }
      totalDiffArr.push(totalDiff);
      // console.log("diffCalc: " + diffCounter)
    }
    console.log("totalDiffArr: " + totalDiffArr);


    for (var k = 0; k < totalDiffArr.length; k++) {
      if (totalDiffArr[k] < lowest) {
        lowest = k;
      }
    }
    console.log(lowest);
    matchName = friendsData[lowest].name;
    matchPhoto = friendsData[lowest].photo;

    console.log(matchName);












    // for (var i = 0; i < humanScores.length; i++) {
    //   console.log(friendsData.scores[i] - humanScores[i])
    //   // humanScoresArr.push(humanScores[i]);
    // }

    // console.log("humanScoresArr: " + humanScoresArr);
    


    // for (var i = 0; i < friendsData.length; i++) {
    //   dog[i].push(friendsData[i].scores);
    // }

    // console.log("Dog7 arr: " + dog7);


  });
}