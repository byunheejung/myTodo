
const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('서버가 ${port}에서 동작중입니다.');
});  

const indexRouter = require('./routes/index');

app.use(express.static('public'));

app.use('/', indexRouter);

const history = require('connect-history-api-fallback');

app.use(history());