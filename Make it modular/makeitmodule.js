var path = require('path');
var mymodule = require('./mymodule');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}


mymodule(dir, filterExtension, callback);

//oficial solution
/* var filterFn = require('./solution_filter.js')
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