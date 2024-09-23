// Crea un archivo llamado `cartRoutes.js` en la carpeta `routes`
const express = require('express');
const router = express.Router();

// Añade rutas para el carrito aquí (puedes dejarlas vacías por ahora)
router.get('/', (req, res) => {
    res.send('Carrito de compras');
});

module.exports = router;
