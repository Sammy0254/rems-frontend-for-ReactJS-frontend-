import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold">{property.name}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-500 font-bold">{property.price}</p>
      <Link to={`/view-property/${property.id}`} className="block mt-4 bg-green-500 text-white py-2 px-4 rounded-lg text-center">
        View Property
      </Link>
    </div>
  </div>
);

export default PropertyCard;
