/* eslint-disable no-console */

const express = require('express');
const app = express();
const mysql = require('mysql');

let port = 3000;

const indexRouter = require('./routes/index');
const history = require('connect-history-api-fallback');

app.listen(port, () => {
    console.log('서버가 ${port}에서 동작중입니다.');
});  

app.use(express.static('public'));
app.use('/', indexRouter);

app.use(history());

// connection 객체 생성
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1720',
    port     : '3306',
    database : 'lunchmenu'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    } else {
        console.log('mysql connection success');
    }
});

connection.query('SELECT * FROM MENU_GROUP', function(err, result) {
    if (err) {
        throw err;
    }
    console.log('The Solution is: ', result);
});

// app.post('/regist', function(req, res) {
//     const user = {
//         'group_id': 'test중',
//         'group_name': 'test중'
//     };
//     var query = connection.query('INSERT INTO MENU_GROUP (group_id, group_name) VALUES (?, ?)',user, function(err, result) {
//         if (err) {
//             console.error(err);
//             throw err;
//         }
//         res.status(200).send('success');
//     });
// });