var filtered_ls = require('./modular_filtered_ls.js')

filtered_ls(process.argv[2], process.argv[3], function(err, list){
	for(var i = 0; i < list.length; i++){
		console.log(list[i]);
	}
});
