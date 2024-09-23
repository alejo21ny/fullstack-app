// CreateProduct.js
import React, { useState } from 'react';
import api from '../api';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const CreateProduct = ({ onProductCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, description, price, image };
      await api.post('/products', newProduct);
      alert('Producto creado con éxito');
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
      if (onProductCreated) onProductCreated();
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Create New Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Product" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <TextField label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary">
          Create Product
        </Button>
      </Box>
    </Container>
  );
};

export default CreateProduct;
