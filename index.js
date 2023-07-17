const express = require('express');
const app = express();

// Importar los enrutadores
const personajesRouter = require('./routes/personajes');
const episodiosRouter = require('./routes/episodios');

// Middleware para manejar datos JSON
app.use(express.json());

// Rutas de los enrutadores
app.use('/personajes', personajesRouter);
app.use('/episodios', episodiosRouter);

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor API de Dragon Ball iniciado en el puerto ${port}`);
});
