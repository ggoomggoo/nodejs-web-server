const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
    User.findAll()
        .then((users) => {
            res.json(users);
        });
});

router.post('/', (req, res) => {
    User.create(req.body)
        .then(() => {
            res.send('success create');
        });
});

router.get('/:id', (req, res) => {
    User.findOne({ id: req.params.id })
        .then((user) => {
            res.json(user);
        });
});

router.put('/:id', (req, res) => {
    User.update(req.body,{ where: { id: req.params.id } })
        .then(() => {
            res.send('success update');
        });
});

router.delete('/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.send('success destory');
        });
});

module.exports = router;