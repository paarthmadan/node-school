var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var minAge = +process.argv[2]


mongo.connect(url, function(err, db){
	if (err) throw err
	var collection = db.collection('parrots')
	collection.find({
		age: {
			$gt: minAge
		}
	},
	{
		_id: 0
	}).toArray(function(err, documents){
		if (err) throw err
		console.log(documents)
		db.close()
	})
})