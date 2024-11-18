// server/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('soa_materias', 'root', '', { // Cambiar el nombre de la base de datos
  host: 'localhost',
  dialect: 'mysql'
});

// Sincronizar la base de datos
(async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();

module.exports = sequelize;