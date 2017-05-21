var http = require('http')
var url = require('url')

var server = http.createServer(function(request, response){


	response.writeHead(200, {
		'Content-Type': 'application/json'
	})


	if(request.method == "GET"){
		
		var urlObject = url.parse(request.url, true);
		var date = urlObject.query.iso 

		switch(urlObject.pathname){
			case "/api/parsetime":
				var isoDate = new Date(date)
				response.end(JSON.stringify({
					hour: isoDate.getHours(),
					minute: isoDate.getMinutes(),
					second: isoDate.getSeconds()
				}))
				break;
			case "/api/unixtime":
				var unixTime = + new Date(date)
				response.end(JSON.stringify({ unixtime: unixTime}))
				break;
			default:
				break;
		}
	}
})

server.listen(process.argv[2])