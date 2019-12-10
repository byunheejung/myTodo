const express = require('express');

const app = express();

let port = 3000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('서버가 ${port}에서 동작중입니다.');
});