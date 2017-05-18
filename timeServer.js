var net = require('net');
var port = process.argv[2];


net.createServer(function (socket){
	//manejo del socket
	console.log('client connected at port ' + port);
	//console.log(socket);
	//Escribe en el socket
	
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	
	if (month.length = 1) {
		var month = "0" + month;
	};
	
	var dateWrite = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
	//console.log(dateWrite);
	//console.log("date > " + date);
	
	
	//console.log(dateWriter);
	//socket.write(dateWriter)
	socket.write(dateWrite)
	
	//Cierra el Socket
	socket.end()
	//Recibe un objeto de datos
}).listen(port)




//SOLUCION OFICIAL

/*var net = require('net')

function zeroFill (i) {
	return (i < 10 ? '0' : '') + i
};

function now () {
	var d = new Date()
	return d.getFullYear() + '-' +
		zeroFill(d.getMonth() + 1) + '-' +
		zeroFill(d.getDate()) + ' ' +
		zeroFill(d.getHours()) + ':' +
		zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n')
})

server.listen(Number(process.argv{2}))
*/
