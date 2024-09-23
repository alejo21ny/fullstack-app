const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // <--- Importar cors
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // <--- Usar cors antes de las rutas
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes); // Tus rutas de productos

// Conectar a la base de datos
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos');
    
    // Iniciar el servidor después de conectar a la base de datos
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    process.exit(1); // Salir si no se puede conectar a la base de datos
  }
}

// Iniciar el servidor
startServer();
