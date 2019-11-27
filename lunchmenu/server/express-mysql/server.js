// 시작
var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var bodyParser = require('body-parser');

var connection = mysql.createConnection(dbconfig);

var app = express();

app.set('views', __dirname + '/public')
// configuration
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('../../public'))
app.get('/', function(req, res) {
  res.render('public/index.html');
});

app.post('/registGroup', function(req, res) {
  
console.log('들어왔다');
console.log(req.body);
  var grouplist = [req.body.groupid,
                   req.body.groupname];

  connection.query('INSERT INTO MENU_GROUP (group_id, group_name) VALUES (?, ?)', grouplist, function (error, result) {
    if (error) {
      console.log('error');
    } else {
      console.log('success');
    }

    res.send('success');
  });
});

// app.post('/', function(req, res) {
//   connection.query('SELECT * FROM MENU_GROUP', function (error, result) {
//     if (error) {
//       console.log('error');
//     } else {
//       console.log('success');
//     }

//     res.send('success');
//   });
// });

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