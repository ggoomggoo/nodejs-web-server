var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var User = require('./models/User');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/users', function(req, res) {
    User.findAll()
        .then(function(users) {
            res.json(users);
        });
});

app.post('/users', function(req, res) {
    User.create(req.body)
    .then(function() {
        res.send('success create');
    });
});

app.get('/users/:id', function(req, res) {
    User.findOne({ id: req.params.id })
        .then(function(user) {
            res.json(user);
        });
});

app.put('/users/:id', function(req, res) {
    User.update(
        req.body,
        { where: { id: req.params.id } }
    )
    .then(function() {
        res.send('success update');
    });
});

app.delete('/users/:id', function(req, res) {
    User.destroy({ where: { id: req.params.id } })
        .then(function() {
            res.send('success destory');
        });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
