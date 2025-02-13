import React, { useState } from 'react';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({ username: '', email: '', passwordHash: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input type="text" name="username" onChange={handleChange} placeholder="Username" className="w-full p-3 border rounded-lg mb-4" required />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-lg mb-4" required />
        <input type="password" name="passwordHash" onChange={handleChange} placeholder="Password" className="w-full p-3 border rounded-lg mb-4" required />
        <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg">Register</button>
      </form>
    </div>
  );
};

export default Register;
