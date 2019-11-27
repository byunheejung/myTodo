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
console.log(req.body);
  var grouplist = [req.body.groupname,
                   req.body.groupname];

  connection.query('INSERT INTO MENU_GROUP (group_id, group_name) VALUES (?, ?)', grouplist, function (error, result) {
    if (error) {
      console.log('group insert error');
    } else {
      console.log('group insert success');
    }

    res.send(console.log('그룹 메뉴 추가가 완료되었습니다'));
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

app.listen(app.get('port'), function() {
  console.log('Express server listeneing on port ' + app.get('port'));
});