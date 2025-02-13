import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../services/api';

const Listings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to load properties:', error);
      }
    };
    getProperties();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Available Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
