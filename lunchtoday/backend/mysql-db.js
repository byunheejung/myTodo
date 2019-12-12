const mysql = require('mysql');

// connection 객체 생성
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1720',
    port     : '3306',
    database : 'lunchmenu'
});

module.exports = connection;