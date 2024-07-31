import React, { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar';
import DropDownDisplay from './DropDownDisplay';
import './searchbar.css'

const SearchBarContainer = () => {
  const [fetchedSearchTerm, setFetchedSearchTerm] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (data) => {
    setFetchedSearchTerm(data);
    setDropdownVisible(true);
  };

  return (
    <div className="d-flex justify-content-center mt-4 main-container-search">
      <div className="w-75 position-relative">
        <SearchBar setFetchedSearchTerm={handleSearch} />
        {isDropdownVisible && (
          <div ref={dropdownRef} className="position-absolute w-100">
            <DropDownDisplay fetchedSearchTerm={fetchedSearchTerm}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarContainer;
