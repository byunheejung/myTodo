
// console.log('Hello asdfasdf;lqjr;lqjewr;lqkje');

// 시작
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   // host     : '42.243.134.40',
//   user     : 'root',
//   password : '1720',
//   port     : '3306',
//   database : 'my_db'
// });

var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var connection = createConnection(dbconfig);

var app = express();

// configuration
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Root');
});

app.get('/persons', function(req, res) {
  connection.query('SELECT * from Persons', function(err, rows) {
    if (err) {
      throw err;
    }

    console.log('The SOlution is : ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listeneing on port ' + app.get('port'));
});

// connection.connect();

// connection.query('SELECT * from Persons', function(err, rows, fields) {
//   if (!err)
//   console.log('The solution is: ', rows);
//   else
//   console.log('Error while performing Query.', err);
// });

// connection.end();
// 끝
