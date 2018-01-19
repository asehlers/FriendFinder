//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");

var app = express();
var port = process.env.PORT || 3000;
apiRoutes(app);
htmlRoutes(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//friends
var friends = [{
	name: "Andrew",
	photo: "not loaded",
	scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}];