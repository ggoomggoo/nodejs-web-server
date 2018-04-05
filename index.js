var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('sqlite:sample.db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
