import React, { useState } from 'react';
import '../App.css';

const mockPlaylists = [
  { id: 1, name: 'Playlist 1' },
  { id: 2, name: 'Playlist 2' },
  { id: 3, name: 'Playlist 3' },
  { id: 4, name: 'Playlist 4' },
];

const RecommendedSongs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>🔍</button>
      </div>
      <div className="playlist-section">
        <div className="playlists">
          <h2>Playlists</h2>
          <ul>
            {mockPlaylists.map(playlist => (
              <li key={playlist.id}>{playlist.name}</li>
            ))}
          </ul>
        </div>
        <div className="recommended-songs">
          <h2>Recommended Songs</h2>
          <div className="song-grid">

            <div className="song-item">Song 1</div>
            <div className="song-item">Song 2</div>
            <div className="song-item">Song 3</div>
            <div className="song-item">Song 4</div>
            <div className="song-item">Song 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSongs;
