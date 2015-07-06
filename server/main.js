// External dependencies
var express 		= require('express'),
	http 			= require('http'),
	index			= "index";
	
__dirname = __dirname.slice(0, -7); // slice the /server folder prefix

// Express dependencies
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use(/\/(?!(data)).*/, function(req, res) { // everything that not '/data' will go through the index.html
	res.sendFile('app/' + index + '.html', { root: __dirname });
});

// Set up server
app.listen(app.get('port'), function() {
	console.log("\t+*+*+ Server up on localhost:" + app.get('port') + " +*+*+");
});

app.get('/data/cute', log);

function log () {
	console.log("PIC");
}

/* §§§§§§§§§§§§§§§§§§§§§§§§

TODO: (Order is optional)

	- When client ask for something cute, he gets a random animal from pics.json

	- Server will send a different kind of animal every mintue (1st minute cats, 2nd minutes puppies and so on)

	- Make sure all animals are used in a catagory before sending the same one twice

	- Log everything in the console

	- Make those logs colorful =D (FYI, colors in node's log will not work through Gulp)

	- Write all the logs to a file

	- Separate functions to Controllers and Services

	- Decide which should be the first catagory based on command line arguments

	- Add another catagory from the front-page of https://www.reddit.com/r/aww/ pictures (In a way that will work tomorrow when the pictures changes as well!)

	- Overall use of npm

	- Adding more to the json file is a bonus!

§§§§§§§§§§§§§§§§§§§§§§§§§ */
