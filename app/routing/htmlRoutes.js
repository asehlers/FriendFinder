var path = require("path");

function routeHTML(app){
	app.get("/", function(req, res){
		console.log("calling default");
  	res.sendFile(path.join(__dirname, "../public/home.html"));
	})

	app.get("/survey.html", function(req, res){
		console.log("calling survey");
  	res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	// app.get("/html/route3", function(req, res){
	// 	res.end();
	// })

	// app.get("/html/route4", function(req, res){
	// 	res.end();
	// })
}

module.exports = routeHTML;