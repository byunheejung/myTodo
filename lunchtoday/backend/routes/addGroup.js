
const express = require('express');
var router = express.Router();
// const path = require('path');

var mysqlDB = require('../mysql-db');
// eslint-disable-next-line no-console
console.log('이곳도 안들어오는가');
// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public', 'index.html'));
//     // res.render('addGroup');
// });

router.get('/', (req, res) => {
    const groupId = '변대리와 함꼐하는 회식메뉴';
    const groupName = '변대리와 함꼐하는 회식메뉴';
    // eslint-disable-next-line no-console
    console.log('변대리와 함꼐하는 회식메뉴');
    
    mysqlDB.query('INSERT INTO MENU_GROUP VALUES(?, ?)', [groupId, groupName], function(err) {
        if (!err) {
            res.send('success');
        } else {
            res.send('err :' + err);
        }
    });
});

module.exports = router;