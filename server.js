//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
console.log("finished requires");

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "app")));



var friends = [
{"name":"Andrew",
"photo":"https://www.whitehouse.gov/wp-content/uploads/2017/12/07_andrew_jackson1.jpg",
"scores":[1,1,1,1,1,1,1,1,1,1]},

{"name":"Morgan",
"photo":"https://static01.nyt.com/images/2017/09/23/us/23xp-freeman-photo/merlin-to-scoop-126258209-309713-master768.jpg",
"scores":["5","5","5","5","5","5","5","5","5","5"]},

{"name":"Scarlet",
"photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Scarlett_Johansson_-_Captain_America_2_press_conference_%28retouched%29_2.jpg/170px-Scarlett_Johansson_-_Captain_America_2_press_conference_%28retouched%29_2.jpg",
"scores":["5","5","5","5","5","5","5","5","5","5"]}];

apiRoutes(app, friends);
htmlRoutes(app);

app.listen(port, function() {
	console.log("App listening on port : " + port);
});