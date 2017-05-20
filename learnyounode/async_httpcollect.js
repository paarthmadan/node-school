var http = require('http')
var bl = require('bl')

var count = 2

var getData = function(count){
	http.get(process.argv[count], function callback(response){
		response.pipe(bl(function (err, data){
				data = data.toString();
				console.log(data)
				if(count < 4){
					getData(count + 1);	
				}
				
		}))
	})	
}

getData(count);