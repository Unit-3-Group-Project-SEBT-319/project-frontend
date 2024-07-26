import React from 'react';
import '../App.css';

const SongList = ({ songs, onDelete }) => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <div key={song.id} className="song-item">
          <div className="song-image"></div>
          <div className="song-details">
            <div className="song-title">{song.name}</div>
            <div className="song-artist">{song.artist}</div>
            <div className="song-album">{song.album}</div>
            <div className="song-popularity">★ {song.popularity}</div>
            <div className="song-actions">
              <button onClick={() => onDelete(song.id)}>🗑️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
