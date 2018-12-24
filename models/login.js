const mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'yLgHdXykng8347',
	database: 'drugs'
});
var pool = mysql.createPool(connection);

connection.connect(function(err){
	if (err) throw err;
	console.log("Connected to database");
});


module.exports.createUser = function(username, password, email, firstname, lastname, callback){
	pool.getConnection(function(err, connection){
		if (err) return res.send(err);
		var query = "INSERT INTO users (username, password, email, firstname, lastname) VALUES (?, ?, ?, ?, ?);"
		connection.query(query, [username, password, email, firstname, lastname], callback);
		connection.release();
		console.log("inserted user");
	});
}