const express = require('express');
const app = express();
let port = 3000;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on port 3000');
});

const indexRouter = require('./routes/index');
const menuGroupRouter = require('./routes/groups.routes');
const menuRouter = require('./routes/menu.routes');

app.use(express.static('public'));
app.use('/', indexRouter); // 
app.use('/api/group', menuGroupRouter);     // group
app.use('/api/menu', menuRouter);           // menu  

const history = require('connect-history-api-fallback');
app.use(history());
