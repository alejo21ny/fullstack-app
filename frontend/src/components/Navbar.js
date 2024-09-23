import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Importar el contexto del carrito

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Obtener los productos del carrito

  // Calcular el total de productos en el carrito
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart ({totalItems}) {/* Mostrar la cantidad total de productos */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
