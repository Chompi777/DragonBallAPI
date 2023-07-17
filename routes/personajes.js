const express = require('express');
const router = express.Router();

// Endpoint para obtener información de personajes
router.get('/', (req, res) => {
  // Implementa la lógica para obtener y devolver la información de personajes
});

// Endpoint para obtener información de un personaje específico
router.get('/:id', (req, res) => {
  const personajeId = req.params.id;
  // Implementa la lógica para obtener y devolver la información del personaje con el ID proporcionado
});

module.exports = router;
