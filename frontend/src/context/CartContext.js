// src/context/CartContext.js
import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Recuperar carrito desde localStorage al iniciar
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persistir carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito
  const addToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item._id === product._id);
      if (existingProduct) {
        return prevItems.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  // Función para eliminar un producto del carrito
  const removeFromCart = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
  }, []);

  // Función para limpiar el carrito
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Calcular el total del carrito
  const calculateTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotal,
  }), [cartItems, addToCart, removeFromCart, clearCart, calculateTotal]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
