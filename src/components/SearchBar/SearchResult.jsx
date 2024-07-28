import React from 'react';
import { useState, useEffect } from 'react'
import AddToPlaylistButton from '../Button/AddToPlaylistButton';
import "./searchresult.css";

const SearchResult = ({ result }) => {
    const [playlists, setPlaylists] = useState([])

useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('http://localhost:4000/audify/playlists')
        const data = await response.json()
        setPlaylists(data.data)
      } catch (error) {
        console.error('Error fetching playlists:', error)
      }
    };

    fetchPlaylists();
  }, [])
    
    return (
        <div className="d-flex align-items-center p-2">
            <img src={result.artworkUrl300 || result.artworkUrl100} alt={result.trackName} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
            <div className="flex-grow-1 mx-2">
                <h5 className="mb-0">{result.trackName}</h5>
                <p className="mb-0 text-secondary artist-name">{result.artistName}</p>
            </div>
            <p className="mb-0 text-muted">{result.primaryGenreName}</p>
            <AddToPlaylistButton
            songId={result.trackId} 
            playlists={playlists}
            onSuccess={(updatedPlaylist) => {
            console.log('Song added to playlist:', updatedPlaylist)
        }}
      />
        </div>
    );
}

export default SearchResult;