import React, { useRef } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';

const properties = [
  { id: 1, name: 'Modern Apartment', location: 'Nairobi', price: '$200,000', image: '/assets/house-img-1.webp' },
  { id: 2, name: 'Luxury Villa', location: 'Mombasa', price: '$500,000', image: '/assets/house-img-2.webp' }
];

const Home = () => {
  const myHomeRef = useRef(null);
  const aboutRef = useRef(null);
  const propertiesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="pt-16">
      <Header scrollToSection={{ myHome: myHomeRef, about: aboutRef, properties: propertiesRef, contact: contactRef }} />

      {/* MyHome Section */}
      <div ref={myHomeRef} className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyHome</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Your trusted real estate marketplace. Find, list, and manage properties with ease. Explore our top listings and start your journey today!
        </p>
      </div>

      {/* Hero Section */}
      <div className="p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Home</h1>
        <SearchBar onSearch={(query) => console.log(query)} />
      </div>

      {/* Properties Section */}
      <div ref={propertiesRef} className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to MyHome, your go-to platform for finding and listing real estate properties.
        </p>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="p-8 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Need assistance? Reach out to us via email at support@myhome.com or call us at +123 456 7890.
        </p>
      </div>
    </div>
  );
};

export default Home;
