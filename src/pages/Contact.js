import React from 'react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Need assistance? Reach out to us via email at support@myhome.com or call us at +123 456 7890.
        </p>
      </div>
    </div>
  );
};

export default Contact;