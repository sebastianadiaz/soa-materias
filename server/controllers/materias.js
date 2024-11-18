const Materia = require('../models/Materia');

const materiasController = {
  obtenerMaterias: async (req, res) => {
    try {
      const materias = await Materia.findAll();
      const materiasDisponibles = materias.filter(materia => materia.alumnos < 30);
      const materiasLlenas = materias.filter(materia => materia.alumnos >= 30);
      res.json({ disponibles: materiasDisponibles, llenas: materiasLlenas });
    } catch (error) {
      console.error('Error al obtener materias:', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener las materias.' });
    }
  },

  obtenerMateriaPorId: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const materia = await Materia.findByPk(id);
      if (materia) {
        res.json(materia);
      } else {
        res.status(404).json({ error: 'Materia no encontrada.' });
      }
    } catch (error) {
      console.error('Error al obtener la materia:', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener la materia.' });
    }
  },

  crearMateria: async (req, res) => {
    try {
      const nuevaMateria = await Materia.create(req.body);
      res.status(201).json({ message: 'Materia agregada', materia: nuevaMateria });
    } catch (error) {
      console.error('Error al crear la materia:', error);
      res.status(500).json({ error: 'Ocurrió un error al crear la materia.' });
    }
  },

  actualizarMateria: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const [updated] = await Materia.update(req.body, { where: { id } });
      if (updated) {
        const updatedMateria = await Materia.findByPk(id);
        res.json({ message: 'Materia actualizada', materia: updatedMateria });
      } else {
        res.status(404).json({ error: 'Materia no encontrada.' });
      }
    } catch (error) {
      console.error('Error al actualizar la materia:', error);
      res.status(500).json({ error: 'Ocurrió un error al actualizar la materia.' });
    }
  },

  eliminarMateriaPorId: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const deleted = await Materia.destroy({ where: { id } });
      if (deleted) {
        res.json({ message: 'Materia eliminada' });
      } else {
        res.status(404).json({ error: 'Materia no encontrada.' });
      }
    } catch (error) {
      console.error('Error al eliminar la materia:', error);
      res.status(500).json({ error: 'Ocurrió un error al eliminar la materia.' });
    }
  },

  eliminarTodasLasMaterias: async (req, res) => {
    try {
      await Materia.destroy({ where: {}, truncate: true });
      res.json({ message: 'Todas las materias han sido eliminadas' });
    } catch (error) {
      console.error('Error al eliminar todas las materias:', error);
      res.status(500).json({ error: 'Ocurrió un error al eliminar todas las materias.' });
    }
  }
};

module.exports = materiasController;