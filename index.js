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

var User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
});

User.sync({ force: true })
    .then(function() {
        return User.create({
            name: 'John',
            age: 20
        });
    })
    .then(function() {
        return User.create({
            name: 'James',
            age: 23
        });
    });

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/users', function(req, res) {
    User.findAll().then(function(users) {
        res.json(users);
    });
});

app.get('/users/:id', function(req, res) {
    User.findOne({ id: req.params.id }).then(function(user) {
        res.json(user);
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
