var express = require('express')
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/api/civs', function(req, res) {
	console.log("I recieved a GET request");
	civlist = [
		{name: "Gandhi", ability: "Fat Cities", unit1: "Elephant", unit2: null},
		{name: "Huns", ability: "Cheap Roads", unit1: "Battering Ram", unit2: "Cavalry Archer"}
	]
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.json(civlist)
});

app.listen(3000);
console.log("Server running on port 3000");