import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to MyHome, your go-to platform for finding and listing real estate properties.
          We aim to connect buyers, sellers, and agents in a seamless and secure environment.
        </p>
      </div>
    </div>
  );
};

export default About;