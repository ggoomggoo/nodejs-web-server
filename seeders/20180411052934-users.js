const _ = require('lodash');
const faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', _.times(30, () => ({
        name: faker.name.firstName(),
        age: faker.random.number({ min: 1, max: 100 }),
        createdAt: new Date(),
        updatedAt: new Date()
    })), {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
