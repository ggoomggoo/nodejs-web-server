const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models');

const home = require('./router/home');
const users = require('./router/users');

const app = express();

db.sequelize.sync();

app.use(bodyParser.json());

app.use('/', home);
app.use('/users', users);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
