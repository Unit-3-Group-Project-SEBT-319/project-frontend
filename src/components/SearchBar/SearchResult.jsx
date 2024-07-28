import React from 'react';
import "./searchresult.css";

const SearchResult = ({ result }) => {
    return (
        <div className="d-flex align-items-center p-2">
            <img src={result.artworkUrl300 || result.artworkUrl100} alt={result.trackName} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
            <div className="flex-grow-1 mx-2">
                <h5 className="mb-0">{result.trackName}</h5>
                <p className="mb-0 text-secondary artist-name">{result.artistName}</p>
            </div>
            <p className="mb-0 text-muted">{result.primaryGenreName}</p>
            <button className="btn btn-outline-primary btn-sm ml-2">+</button>
        </div>
    );
}

export default SearchResult;