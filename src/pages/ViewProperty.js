import React from 'react';
import { useParams } from 'react-router-dom';

const ViewProperty = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Property Details - {id}</h1>
      {/* Fetch and display property details from backend using Axios */}
    </div>
  );
};

export default ViewProperty;
