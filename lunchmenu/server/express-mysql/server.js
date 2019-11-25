
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

var app = express();

// configuration
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Root');
});

app.get('/', function(req, res) {
  res.render('index.html');
  // connection.query('SELECT * from Persons', function(err, rows) {
  //   if (err) {
  //     throw err;
  //   }

  //   console.log('The SOlution is : ', rows);
  //   res.send(rows);
  // });
});

app.listen(app.get('port'), function() {
  console.log('Express server listeneing on port ' + app.get('port'));
});


// var http = require('http'); 
// var fs = require('fs'); // 파일 읽기, 쓰기 등 을 할 수 있는 모듈 
// // 404 error message : 페이지 오류가 발생했을때, 
// function send404Message(response){ 
//   response.writeHead(404,{"Content-Type":"text/plain"}
// ); // 단순한 글자 출력 
// response.write("404 ERROR... "); 
// response.end(); 
// } 
// // 200 Okay : 정상적인 요청 
// function onRequest(request, response){ 
//   if(request.method == 'GET' && request.url == '/'){ 
//     console.log('dddddddddddd');
//     response.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력 
//     fs.createReadStream("../index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함 
//   } else { 
//     // file이 존재 하지않을때, 
//     send404Message(response); 
//   } 
// } 

// http.createServer(onRequest).listen(8888); 
// console.log("Server Created...");​