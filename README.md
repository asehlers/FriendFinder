# FriendFinder

##Files

####server.js
	responsible for creating initial server code using express, path, and body-parser. Creates initial friends objects and adds a listener for remote use.

####htmlRoutes.js
	contained the paths for home.html and surver.html get requests.

####home.html
	basic homepage containing links to the survey and current friends on the backend

####survey.html
	includes input for name, photo link, and a number of sliders for value selection. Sliders have differing labels/tick marks depending on browser. Will display closest friend match at bottom upon survey submission.

####apiRoutes.js
	File includes 2 api routes. api/friends get to retrieve the current array of friends using json. api/friends post will pass the newest survey back and run comparisons to current friend entries. Will return closest match.

The following images show a demonstration of the survey addition page.

![alt text](./demo01.png)	

![alt text](./demo02.png)