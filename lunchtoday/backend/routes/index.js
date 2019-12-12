const express = require('express');
const router = express.Router();
const path = require('path');
const addGroup = require('./addGroup');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.use(addGroup);

module.exports = router;