import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white shadow-md p-4 rounded-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by location..."
        className="flex-grow p-2 border border-gray-300 rounded-l-lg"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Search</button>
    </form>
  );
};

export default SearchBar;
