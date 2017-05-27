var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db){
	if (err) throw err
	var collection = db.collection('prices')
	
	collection.aggregate([{
		$match: {
			size: process.argv[2]
		}
	},
	{
		$group:{
			_id: 'null',
			average:{
				$avg: "$price"
			}
		}
	}]).toArray(function(err, array){
		if (err) throw err
		console.log(Number(array[0].average).toFixed(2))
		db.close()
	})
})