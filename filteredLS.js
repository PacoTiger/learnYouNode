var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext1 = "." + process.argv[3];

fs.readdir(dir, function (err, files) {
	if (err) {
		console.log("Error |||===> " + err);
	};

	for (var i = 0; i < files.length; i++) {
		if (path.extname(files[i]) === ext1){
			console.log(files[i]);
		}
	};
	
});

//Oficial Solution
/*var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext1 = "." + process.argv[3];

fs.readdir(folder, function (err, files) {
	if (err) return console.error(err)
	files.forEach(function (file){
		if (path.extname(file) === ext) {
			console.log(file)
		}
	});
});*/