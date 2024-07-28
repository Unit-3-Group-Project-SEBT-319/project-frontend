import React, { useState } from 'react';
import "./searchbar.css";

const SearchBar = ({ setFetchedSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.trim() !== "") {
      try {
        const response = await fetch(`http://localhost:4000/audify/search/songs?q=${encodeURIComponent(newSearchTerm)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFetchedSearchTerm(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setFetchedSearchTerm(null);
    }
  };

  return (
    <div className="input-wrapper">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={updateSearchTerm} 
        placeholder='Find your song...'
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
