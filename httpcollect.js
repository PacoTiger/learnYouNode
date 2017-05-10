var http = require('http');
var url = process.argv[2];

var info = '';


http.get(url, function (response) {
	response.setEncoding('utf8')
	response.on('data', function (data){
		info += data.toString();
	});
	response.on('end', function (){		
		console.log(info.length);
		console.log(info);
		info = '';
	});
	response.on('error', console.error)
}).on('error', console.error)

//Oficial Solution
/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			return console.error(err)
		}
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
});
*/
