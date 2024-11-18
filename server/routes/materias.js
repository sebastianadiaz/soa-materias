const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materias');

router.get('/', materiasController.obtenerMaterias);
router.get('/:id', materiasController.obtenerMateriaPorId);
router.post('/', materiasController.crearMateria);
router.delete('/:id', materiasController.eliminarMateriaPorId);
router.delete('/', materiasController.eliminarTodasLasMaterias);

module.exports = router;