 const express = require('express');
 const bodyParser = require('body-parser');
 let port = 3000;

 const app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false}));

 app.get('/', (req, res) => {
     res.json( {message: 'Welcome'} );
 });

 require('./routes/model.routes.js')(app);

 app.listen(port, () => {
     // eslint-disable-next-line no-console
     console.log('Server is running on port 3000');
 });