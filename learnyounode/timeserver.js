// FORMAT
// "YYYY-MM-DD hh:mm"  

var net = require('net')
var date = new Date();

var server = net.createServer(function listener(socket){
	var monthZero = ""
	var dateZero = ""
	if(date.getMonth() + 1 < 10)
		monthZero = "0"
	if(date.getDate() < 10)
		dateZero = "0"
	var data = date.getFullYear() + "-" + monthZero + (date.getMonth() + 1) + "-" + dateZero + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
	socket.write(data)
	socket.end("\n")
})

server.listen(process.argv[2]);