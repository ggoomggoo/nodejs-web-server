var express = require('express');
var router = express.Router();

var User = require('../models/User');

router.get('/', function(req, res) {
    User.findAll()
        .then(function(users) {
            res.json(users);
        });
});

router.post('/', function(req, res) {
    User.create(req.body)
    .then(function() {
        res.send('success create');
    });
});

router.get('/:id', function(req, res) {
    User.findOne({ id: req.params.id })
        .then(function(user) {
            res.json(user);
        });
});

router.put('/:id', function(req, res) {
    User.update(
        req.body,
        { where: { id: req.params.id } }
    )
    .then(function() {
        res.send('success update');
    });
});

router.delete('/:id', function(req, res) {
    User.destroy({ where: { id: req.params.id } })
        .then(function() {
            res.send('success destory');
        });
});

module.exports = router;