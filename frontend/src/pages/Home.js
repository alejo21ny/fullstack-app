import React, { useState, useEffect } from 'react';
import CreateProduct from '../components/CreateProduct';
import ProductList from '../components/ProductList';
import UpdateProduct from '../components/UpdateProduct';
import api from '../api';
import { Container, Box, TextField, Button, Typography, Card, CardContent, CardActions, Grid } from '@mui/material';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para producto seleccionado

  // Función para obtener todos los productos
  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data); // Actualizar el estado con los productos obtenidos
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  // Ejecutar fetchProducts cuando el componente se monta
  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para seleccionar un producto para editar
  const handleEdit = (product) => {
    setSelectedProduct(product); // Establecer el producto seleccionado
  };

  // Función para actualizar la lista de productos después de una actualización
  const handleUpdate = async () => {
    await fetchProducts(); // Actualizar la lista de productos
    setSelectedProduct(null); // Limpiar el producto seleccionado
  };

  return (
    <div>
      <h1>Welcome to your Store</h1>
      {/* Componente para crear un nuevo producto */}
      <CreateProduct onProductCreated={fetchProducts} />

      {/* Componente para listar los productos */}
      <ProductList
        products={products} // Lista de productos
        onDelete={fetchProducts} // Función para actualizar la lista después de eliminar
        onEdit={handleEdit} // Función para seleccionar un producto para editar
      />

      {/* Componente para actualizar un producto si se ha seleccionado */}
      {selectedProduct && (
        <UpdateProduct productId={selectedProduct._id} onProductUpdated={handleUpdate} />
      )}
    </div>
  );
};

export default Home;
