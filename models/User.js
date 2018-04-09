const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});  

User.sync({ force: true })
    .then(() => {
        return User.create({
            name: 'John',
            age: 20
        });
    })
    .then(() => {
        return User.create({
            name: 'James',
            age: 23
        });
    });

module.exports = User;
