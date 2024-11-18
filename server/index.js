const express = require('express');
const materiasRouter = require('./routes/materias');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/materias', materiasRouter); // Monta el enrutador de materias

app.listen(port, () => {
  console.log(`Servidor API REST corriendo en el puerto ${port}`);
});