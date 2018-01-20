var path = require("path");

function routeAPI(app, friends){
	app.get("/api/friends", function(req, res){
		console.log("calling output");
		// console.log(friends);
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){
		console.log("calling input");
		var newSurvey = req.body;
		console.log(newSurvey);
		var comp = checkFriend(friends[0], newSurvey);
		var index = 0;
		for(var j = 1; j < friends.length; j++){
			var currentComp = checkFriend(friends[j], newSurvey);
			if(currentComp < comp){
				comp = currentComp;
				index = j;
			}
		}
		friends.push(newSurvey);
		res.json(friends[index]);
	});

	// app.get("/html/route3", function(req, res){
	// 	res.end();
	// })

	// app.get("/html/route4", function(req, res){
	// 	res.end();
	// })
}

function checkFriend(friend1, friend2)
{
	console.log(friend1);
	console.log(friend2);
	var comp = 0;
	for(i = 0; i < 10; i++)
	{
		comp += Math.abs(friend1.scores[i] - friend2.scores[i]);
	}
	return comp;
}

module.exports = routeAPI;