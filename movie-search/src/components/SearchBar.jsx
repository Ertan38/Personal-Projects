import React, { useState } from 'react';
import '../stylesheet/search.css';

function SearchBar({ searchMovies }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    searchMovies(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
