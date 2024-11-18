const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('istic_materias', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;