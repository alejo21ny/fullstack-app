import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importa el hook de navegación
import api from '../api';

const ProductList = ({ products, onDelete, onEdit }) => {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      alert('Producto eliminado con éxito');
      onDelete();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`); // Navega a la página de detalles del producto
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
         Products List
      </Typography>
      <Grid container spacing={3}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                  <img src={product.image} alt={product.name} width="100%" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => onEdit(product)}>
                    Edit
                  </Button>
                  <Button size="small" color="secondary" onClick={() => handleDelete(product._id)}>
                    Delete
                  </Button>
                  <Button size="small" color="default" onClick={() => handleViewDetails(product._id)}> {/* Cambia el evento onClick */}
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No products available.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ProductList;
