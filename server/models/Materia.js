// server/models/Materia.js

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
}, {
  tableName: 'materias', // Nombre de la tabla en la base de datos
  timestamps: false      // Desactivar timestamps (createdAt, updatedAt)
});

module.exports = Materia;