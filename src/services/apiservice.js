// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000.com';

export const getBooks = async () => {
  return await axios.get(`${API_URL}/books`);
};

export const addBook = async (book) => {
  return await axios.post(`${API_URL}/books`, book);
};

export const updateBook = async (id, book) => {
  return await axios.put(`${API_URL}/books/${id}`, book);
};

export const deleteBook = async (id) => {
  return await axios.delete(`${API_URL}/books/${id}`);
};
