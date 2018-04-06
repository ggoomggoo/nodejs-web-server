var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var home = require('./router/home');
var users = require('./router/users');

app.use(bodyParser.json());

app.use('/', home);
app.use('/users', users);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
