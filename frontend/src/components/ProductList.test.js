import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';


// Datos de prueba
const mockProducts = [
  { _id: '1', name: 'Test Product 1', description: 'Description 1', price: 100, image: 'http://image1.com' },
  { _id: '2', name: 'Test Product 2', description: 'Description 2', price: 200, image: 'http://image2.com' },
];

test('muestra la lista de productos', () => {
  render(
    <MemoryRouter>
      <ProductList products={mockProducts} onDelete={() => {}} onEdit={() => {}} />
    </MemoryRouter>
  );

  // Verifica que los nombres de los productos se muestran en la pantalla
  const productNames = screen.getAllByRole('heading', { level: 3 });
  expect(productNames).toHaveLength(2);
  expect(productNames[0]).toHaveTextContent('Test Product 1');
  expect(productNames[1]).toHaveTextContent('Test Product 2');
});
