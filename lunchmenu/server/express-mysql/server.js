// 시작
var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();

app.set('views', __dirname + '/public')
// configuration
app.set('port', process.env.PORT || 3000);
app.use(express.static('../../public'))
app.get('/', function(req, res) {
  res.render('index.html');
});

// app.get('/', function(req, res) {
//   // connection.query('SELECT * from Persons', function(err, rows) {
//   //   if (err) {
//   //     throw err;
//   //   }

//   //   console.log('The SOlution is : ', rows);
//   //   res.send(rows);
//   // });
// });

app.listen(app.get('port'), function() {
  console.log('Express server listeneing on port ' + app.get('port'));
});