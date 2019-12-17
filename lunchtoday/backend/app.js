//  const express = require('express');
//  const bodyParser = require('body-parser');
//  let port = 3000;

//  const app = express();

//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({ extended: false}));

//  app.get('/', (req, res) => {
//      res.json( {message: 'Welcome'} );
//  });

//  require('./routes/model.routes.js')(app);

//  app.listen(port, () => {
//      // eslint-disable-next-line no-console
//      console.log('Server is running on port 3000');
//  });

 const express = require('express');
 const app = express();
 let port = 3000;

 const indexRouter = require('./routes/index');
 const groupsRouter = require('./routes/model.routes');

 app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on port 3000');
});

app.use(express.static('public'));
app.use('/', indexRouter); // 
app.use('/api/groups', groupsRouter); //database

const history = require('connect-history-api-fallback');
app.use(history());
