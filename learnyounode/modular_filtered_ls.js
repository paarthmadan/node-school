var fs = require('fs')

module.exports = function(directory, filterExtension, callback){

	var filteredList = [];

	fs.readdir(directory, function (err, list){

		if(err){
			return callback(err);
		}

		for(var i = 0; i < list.length; i++){
			if(list[i].includes("." + filterExtension)){
				filteredList.push(list[i]);
			}	
		}

		return callback(null, filteredList);
	})	
	
}

