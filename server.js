var express = require('express'),
// create variable express which equals the node model express.
	app		= express();
// new application
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
// when someone makes http get request to root directory, respond by sending index.html
app.listen(3000, function() {
	console.log('I\'m Listening...');
})
// development environment listening on port 3000 to handle html requests coming in
