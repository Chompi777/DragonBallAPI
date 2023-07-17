const express = require('express');
const router = express.Router();

// Endpoint para obtener información de episodios
router.get('/', (req, res) => {
  // Implementa la lógica para obtener y devolver la información de episodios
});

// Endpoint para obtener información de un episodio específico
router.get('/:id', (req, res) => {
  const episodioId = req.params.id;
  // Implementa la lógica para obtener y devolver la información del episodio con el ID proporcionado
});

module.exports = router;
