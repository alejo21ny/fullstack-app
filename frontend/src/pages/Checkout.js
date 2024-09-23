import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Función para manejar el pago simulado
  const handleCheckout = () => {
    alert('Payment completed successfully. Thank you for your purchase.');
    clearCart(); // Vaciar el carrito después del pago
    navigate('/'); // Redirigir a la página de inicio
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Purchase Summary</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item._id} style={{ marginBottom: '20px' }}>
                <h4>{item.name}</h4>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <hr />
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal().toFixed(2)}</h3>
          <button onClick={handleCheckout} style={{ padding: '10px 20px', marginTop: '20px' }}>
          Make Payment
          </button>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Checkout;
