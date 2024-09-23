import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import App from './App';
import './index.css';

// Crear el contenedor raíz
const container = document.getElementById('root');
const root = createRoot(container); // Crear la raíz usando createRoot

root.render(
  <Router>
    <App />
  </Router>
);
