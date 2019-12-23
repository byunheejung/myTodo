const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
    // res.sendFile(path.join(__dirname, '../src', 'main.js'));
});

module.exports = router;