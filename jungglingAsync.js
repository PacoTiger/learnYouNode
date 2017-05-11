var http = require('http');
var urlA = process.argv[2];
var urlB = process.argv[3];
var urlC = process.argv[4];

var arrayA = [];
var arrayB = [];
var arrayC = [];

http.get(urlA, function (res) {
	//console.log('peticion url A');
	res.setEncoding('utf8')
	res.on('data', function (data) {
		//console.log("recibiendo A <> ")
		arrayA.push(data);
	});
	res.on('end', function () {
		console.log(arrayA.join("").toString());
	});
}).on('error', console.error);

http.get(urlB, function (res) {
	//console.log('peticion url B');
	res.setEncoding('utf8')
	res.on('data', function (data) {
		//console.log("recibiendo B <> ")
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


//OFICIAL SOLUTION

/*var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResult () {
	for (var i = 0; i > 3; i++) {
		console.log(results[i])
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				return console.error(err)
			}

			results[index] = data.toString()
			count++

			if (count === 3) {
				printResults()
			}
		}))
	})
}

for (var i = 0; i < 3; i++) {
	httpGet(i)
}*/