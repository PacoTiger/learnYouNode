var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];


http.createServer( function (req, res) {
	
	console.log('Server running at ' + port);

	//it's optional
	res.writeHead(200, {'content-type': 'text/plain'})

	fs.createReadStream(file).pipe(res)


}).listen(port)