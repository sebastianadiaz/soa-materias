const express = require('express');
const axios = require('axios');
const methodOverride = require('method-override'); // Para usar PUT y DELETE en formularios HTML
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Configurar method-override

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/materias', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/materias');
    const materias = response.data;
    res.render('materias', { materias });
  } catch (error) {
    console.error('Error al obtener las materias:', error);
    res.render('materias', { materias: [], error: 'Error al obtener las materias' });
  }
});

// Agregar materia
app.post('/materias', async (req, res) => {
  try {
    await axios.post('http://localhost:3000/api/materias', req.body);
    res.redirect('/materias');
  } catch (error) {
    console.error('Error al agregar la materia:', error);
    res.redirect('/materias'); // Redirigir de todos modos para mostrar un posible mensaje de error
  }
});

// Editar materia
app.get('/materias/:id/editar', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`http://localhost:3000/api/materias/${id}`);
    const materia = response.data;
    res.render('editarMateria', { materia });
  } catch (error) {
    console.error('Error al obtener la materia:', error);
    res.redirect('/materias');
  }
});

app.put('/materias/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await axios.put(`http://localhost:3000/api/materias/${id}`, req.body);
    res.redirect('/materias');
  } catch (error) {
    console.error('Error al actualizar la materia:', error);
    res.redirect('/materias');
  }
});

// Eliminar materia
app.delete('/materias/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await axios.delete(`http://localhost:3000/api/materias/${id}`);
    res.redirect('/materias');
  } catch (error) {
    console.error('Error al eliminar la materia:', error);
    res.redirect('/materias');
  }
});

app.listen(port, () => {
  console.log(`Cliente Node.js corriendo en el puerto ${port}`);
});