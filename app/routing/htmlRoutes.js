
function routeHTML(app){
	app.get("/html/", function(req, res){
		res.end();
	})

	app.get("/html/survey.html", function(req, res){
		res.end();
	})

	// app.get("/html/route3", function(req, res){
	// 	res.end();
	// })

	// app.get("/html/route4", function(req, res){
	// 	res.end();
	// })
}

module.exports = routeHTML;