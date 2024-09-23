import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // Importar el componente de checkout
import { CartProvider } from './context/CartContext'; // Importar el CartProvider
import Navbar from './components/Navbar'; // Importar el componente Navbar



function App() {
  return (
    
    <div>
      <CartProvider> {/* Envolver la aplicación en CartProvider */}
      <Navbar /> {/* Incluir el Navbar */}
      <Routes>
      
  <Route path="/" element={<Home />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} /> {/* Añadir la ruta de checkout */}

</Routes>
</CartProvider>
    </div>
  );
}

export default App;
