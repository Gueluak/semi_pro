var mysql = require('/usr/local/mysql/bin/mysql');
var mySqlClient = mysql.createConnection({
	host     : "localhost",
	user     : "user",
	password : "password",
	database : "mysqlTest"
	});
console.log(mySqlClien);