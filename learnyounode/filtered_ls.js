var fs = require('fs')

var directory = process.argv[2];
var filterExtension = process.argv[3];

fs.readdir(directory, function callback(err, list){

	for(var i = 0; i < list.length; i++){
		if(list[i].includes("." + filterExtension))
			console.log(list[i])
	}
})