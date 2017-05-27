var MongoClient =  require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var namesDocument = {
	firstName: process.argv[2],
	lastName: process.argv[3]
}


MongoClient.connect(url, function(err, db){

	if (err) throw err

	var docs = db.collection('docs')
	docs.insert({
		namesDocument
	}, function(err, data){
		if (err) throw err
		console.log(JSON.stringify(namesDocument))
		db.close()
	})

})
