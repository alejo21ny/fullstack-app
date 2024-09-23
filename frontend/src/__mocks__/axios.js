// src/__mocks__/axios.js
const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.post = jest.fn(); // Mocketea el método post
module.exports = mockAxios;
