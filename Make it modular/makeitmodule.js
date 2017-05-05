var mymodule = require('./mymodule.js');
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext1 = process.argv[3];
//var callback = function(err, files);


function mymodule (folder, ext1, function(err, data) {
	if (err) return console.error(err);
	console.log(data);
});

mymodule();