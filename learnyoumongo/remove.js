var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]
var query = process.argv[4]

mongo.connect(url, function(err, db){
	if (err) throw err	
	var collection = db.collection(process.argv[3])
	collection.remove({
		_id: query
	}, function(err, data){
		if (err) throw err
		db.close()
	})	
})