const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');

const register = require('./routes/r_register');
const login = require('./routes/r_login');

const app = express();

app.use(bodyParser.json({limit: '250mb', extended: true}));
app.use(bodyParser.urlencoded( {limit: "250mb", extended: false, parameterLimit:50000 } ));
app.use(cors.allowCrossDomain);

app.use('/mst', register);
app.use('/mst', login);

const port = 3001;
app.listen(port, () => console.log('run server on '+port));