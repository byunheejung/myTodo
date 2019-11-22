var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '42.243.134.40',
//   host     : '42.243.134.40',
  user     : 'anjelra',
  password : '1720',
  port     : '3306',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT * FROM Persons', function(err, rows, fields) {
    if (!err) {
        console.log('The solution is: ' + rows);
    } else {
        console.log('Error while performing Query', err);
    }
});

connection.end();

