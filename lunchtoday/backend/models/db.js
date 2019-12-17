const mysql = require('mysql');
const dbConfig = require('../mysql-db.js');

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
});

// eslint-disable-next-line no-console
console.log({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
});

connection.connect(error => {
    if (error) {
        throw error;
    }

    // eslint-disable-next-line no-console
    console.log('Successfully connected to the database.');
});

module.exports = connection;