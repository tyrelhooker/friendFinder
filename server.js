// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Setting initial or default port
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Pointing to Route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});