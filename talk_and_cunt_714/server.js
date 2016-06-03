var http = require("http");
var querystring = require('querystring');
var url = require('url');
var table = "test";
var esult = "";

var server = http.createServer
(
	function(req, res) 
	{

		var params = querystring.parse(url.parse(req.url).query);
		var match = "";
		var mysql = require("mysql");
		var mySqlClient = mysql.createConnection
		({
 		  host     : "localhost",
 		  port     : 3307,
 		  user     : "root",
		  password : "root",
		  database : "testounet"
		});
	//	console.log(params);
		mySqlClient.connect(function(err)
		{
  			if(err)
  			{
    			console.log('Error connecting to Db');
    			return;
  			}
  			console.log('Connection established');
		});
		switch (params['action'])
		{
			case "read":
				var d2 = id == '*' ? "SELECT * FROM test" : "SELECT * FROM test WHERE id = "+params['id'];
				mySqlClient.query(d2,function(err,result,field)
				{
  					if(err) throw err;
  					console.log('Data received from Db:\n');
  					for(i = 0; i < field; i++)
  					{
  						i != 0? esult = '@'+esult : false;
  						esult = esult+result[i]['id']+':'+result[i]['label']+':'+result[i]['valeur'];
  						console.log(result[i]['V_1']);
					}
				});
				break;
			case "add":
				var d1 = {label: params['label'], valeur: params['valeur']} 
				mySqlClient.query('INSERT INTO test SET ?',d1, function(err,res)
				{
  					if(err) throw err;
  					console.log('Last insert ID:', res.insertId);
				});
				break;
			case "edit":
				mySqlClient.query('UPDATE data SET location = ? Where ID = ?',["data"],function (err, result) 
  				{
    				if (err) throw err;
    				console.log('Changed ' + result.changedRows + ' rows');
  				});
				break;
			case "del":
				mySqlClient.query('DELETE FROM test WHERE id = '+params['id'],function (err, result) 
				{
    				if (err) throw err;
    				console.log('Deleted ' + result.affectedRows + ' rows');
  				});
				break;
		}
		console.log(typeof esult);
		res.setHeader('Content-Type', 'text/html');
  		res.writeHead(200);
  		console.log(esult);
  		res.end(esult);
  		//res.format();
  		//res.object(str);
		
		mySqlClient.end(function(err){});
	}
);
server.listen(4242);