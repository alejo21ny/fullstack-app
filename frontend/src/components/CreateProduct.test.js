import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Usar MemoryRouter para envolver el componente en pruebas
import CreateProduct from './CreateProduct';
import axios from 'axios';

jest.mock('axios'); // Mock de axios

test('envía el formulario con datos correctos y llama a onProductCreated', async () => {
  // Mock de la respuesta de axios
  axios.post.mockResolvedValueOnce({
    data: { name: 'New Product', description: 'New Description', price: 100, image: 'http://newimage.com' }
  });

  // Mock de la función onProductCreated
  const mockOnProductCreated = jest.fn();

  // Renderizar el componente dentro de MemoryRouter
  render(
    <MemoryRouter>
      <CreateProduct onProductCreated={mockOnProductCreated} />
    </MemoryRouter>
  );

  // Utiliza screen.debug() justo después de renderizar el componente
  screen.debug(); // Esto imprimirá el contenido actual del DOM en la consola

  // Simular cambios en los campos del formulario
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'New Product' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'New Description' } });
  fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: 100 } });
  fireEvent.change(screen.getByLabelText(/Image/i), { target: { value: 'http://newimage.com' } });

  // Simular clic en el botón de crear producto
  fireEvent.click(screen.getByText(/Create Product/i));

  // Verificar que la función de callback sea llamada
  expect(mockOnProductCreated).toHaveBeenCalledTimes(1);

  // Verificar que la función de axios.post sea llamada con los datos correctos
  expect(axios.post).toHaveBeenCalledWith('/products', {
    name: 'New Product',
    description: 'New Description',
    price: 100,
    image: 'http://newimage.com'
  });

  // Verificar que los campos del formulario se hayan limpiado después de la creación del producto
  expect(screen.getByLabelText(/Name/i).value).toBe('');
  expect(screen.getByLabelText(/Description/i).value).toBe('');
  expect(screen.getByLabelText(/Price/i).value).toBe('');
  expect(screen.getByLabelText(/Image/i).value).toBe('');
});
