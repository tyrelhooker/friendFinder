// Sets friends data in friends.js to a variable
var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // A GET route with the URL to display JSON of friends from friends.js file
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
}