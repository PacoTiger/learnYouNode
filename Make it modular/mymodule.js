var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext1, callback){
	fs.readdir(folder, function (err, files) {
		if (err) return console.error(err);

		files.forEach(function (file){
			if (path.extname(file) === ext1) {
				console.log(file);
			}
		});
	});
};
