// Gets the correct file path for html
var path = require("path");

// When users visit the url page the user is shown the HTML of the page
module.exports = function(app) {

  // Gets the survey.html file
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  // Sets up default route that leads to home.html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}; 