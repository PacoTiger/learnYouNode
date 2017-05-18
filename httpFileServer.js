var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

http.createServer( function (req, res) {
	//console.log('client connected at port ' + port);
	console.log('Server running at http://127.0.0.1:1337/');
	console.log('file found in ' + file);

	console.info('res > ' + res);
	console.info('req > ' + req);
}).listen(1337, '127.0.0.1')