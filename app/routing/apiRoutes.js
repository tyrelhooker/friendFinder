// Sets friends data in friends.js to a variable
var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // A GET route with the URL to display JSON of friends from friends.js file
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // Calculates the survey user's score against the friendsData score and sends back an object.
  app.post("/api/friends", function(req, res) {
    console.log("New Human: " + JSON.stringify(req.body));
    var newHuman = req.body;
    var humanScores = newHuman.scores;
    // Max total survey score is 50 so this is set to 51 to find the lowest using the totalDiff
    var lowest = 51;
    var matchName;
    var matchPhoto;
    
    // Loop through the friendsData to calculate total difference between the humanScore and each dog's score. 
    for (var i = 0; i < friendsData.length; i++) {
      var totalDiff = 0;
      for (var j = 0; j < humanScores.length; j++) {
        totalDiff += Math.abs(Number(friendsData[i].scores[j]) - Number(humanScores[j]));
      }
      // console.log("totalDiff: " + totalDiff);
      
      // While in the outerloop, compare the totalDiff with the current friendsData. Assigns a new value to the lowest variable if totalDiff is lower than 51 then proceeds to each friendsData object comparing the lowest to the current total diff.
      if (totalDiff < lowest) {
        lowest = totalDiff;
        // Checks to see if the current friendsData is a human or dog.
        if (friendsData[i].dog === "true"){
          // Assigns the variables for the match object
          matchName = friendsData[i].name;
          matchPhoto = friendsData[i].photo;
          console.log("matchName: " + matchName);
          console.log("matchPhoto: " + matchPhoto);
        }
      }
    }
    // Returns to the survey.html the newly assigned properties in an object.
    var match = {
      name: matchName,
      photo: matchPhoto
    }
    console.log(match);
    res.json(match);

    // This pushes the user survey data into the api array of objects while the server is listening. 
    friendsData.push(newHuman);
  });
}