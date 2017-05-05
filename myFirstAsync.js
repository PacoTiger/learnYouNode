var fs = require('fs');
var file = process.argv[2]

fs.readFile(file, function (err, data){
	if (err) {
		return console.log("Hay un Error, Callback no cargado |--->" + err);
	}
	// fs.readFile(file, 'utf8', callback)
	var countLines = data.toString().split('\n').length - 1
	console.log(countLines)
});