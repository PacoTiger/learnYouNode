var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension) return true;
            })
            return callback(null, list);
        }
    })
}

//oficial solution
 /*var filterFn = require('./solution_filter.js')
 var dir = process.argv[2]
 var filterStr = process.argv[3]

 filterFn(dir, filterStr, function (err, list) {
   if (err) {
     return console.error('There was an error:', err)
   }

   list.forEach(function (file) {
     console.log(file)
   })
 })*/