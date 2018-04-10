'use strict';
module.exports = (sequelize, DataTypes) => {
  var test = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};
