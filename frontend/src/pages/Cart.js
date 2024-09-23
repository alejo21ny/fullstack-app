import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Definir navigate usando useNavigate

  // Función para calcular el total del carrito
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2> Shopping cart </h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal().toFixed(2)}</h3>
          <button onClick={clearCart}>Empty Cart</button>
          <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button> {/* Redirigir al checkout */}
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
