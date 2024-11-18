const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Materia = sequelize.define('Materia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alumnos: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Materia;