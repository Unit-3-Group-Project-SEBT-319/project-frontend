import React from 'react';
import "./dropdowndisplay.css";
import SearchResult from './SearchResult';

const DropDownDisplay = ({ fetchedSearchTerm }) => {
    return (
        <div className="results-list">
            {fetchedSearchTerm && fetchedSearchTerm.results && fetchedSearchTerm.results.map((dataIterator) => (
                <SearchResult result={dataIterator} key={dataIterator.trackId} />
            ))}
        </div>
    );
}

export default DropDownDisplay;
