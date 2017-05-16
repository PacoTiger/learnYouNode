var net = require('net');
/*var port = process.argv[2];



net.createServer(function (socket){
	//manejo del socket
	console.log('client connected');
	console.log(socket);

}).listen(port)
*/

function getDate () {
	var date = new Date();
	/*var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();*/
	



	/*if (month.length = 1) {
		var month = "0" + month;
	};*/

	//console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);
	console.log("date > " + date);
};

getDate();