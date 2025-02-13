import axios from 'axios';

const API_URL = 'http://localhost:5018/api/auth';

// Register User
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Get Auth Token
export const getToken = () => {
  return localStorage.getItem('token');
};
