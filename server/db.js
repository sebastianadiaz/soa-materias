// server/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('istic_carreras', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;