var http = require('http');
var urlA = process.argv[2];
var urlB = process.argv[3];
var urlC = process.argv[4];

var arrayA = [];
var arrayB = [];
var arrayC = [];

http.get(urlA, function (res) {
	res.setEncoding('utf8')
	res.on('data', function (data) {
		arrayA.push(data);
	});
	res.on('end', function () {
		console.log(arrayA.join("").toString());
	});
}).on('error', console.error);

http.get(urlB, function (res) {
	res.setEncoding('utf8')
	res.on('data', function (data) {
		arrayB.push(data);
	});
	res.on('end', function () {
		console.log(arrayB.join("").toString());
	});
}).on('error', console.error);

http.get(urlC, function (res) {
	res.setEncoding('utf8')
	res.on('data', function (data) {
		arrayC.push(data);
	});
	res.on('end', function () {
		console.log(arrayC.join("").toString());
	});
}).on('error', console.error);