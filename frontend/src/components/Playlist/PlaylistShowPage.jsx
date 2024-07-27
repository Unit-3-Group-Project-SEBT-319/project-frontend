import React from 'react';

const PlaylistShowPage = ({ playlist, songs, onDelete }) => {
  return (
    <div className="playlist-show-page">
      <div className="playlist-sidebar">
        <div className="playlist-section">
          <h2>Playlists</h2>
          {/* Add your playlist links or items here */}
        </div>
        <div className="now-playing">
          <h2>Now Playing</h2>
          {/* Add now playing content here */}
        </div>
      </div>
      <div className="playlist-content">
        <h1>{playlist.name}</h1>
        <div className="song-grid">
          <div className="song-grid-header">
            <div className="song-grid-title">Title</div>
            <div className="song-grid-artist">Artist</div>
            <div className="song-grid-popularity">Popularity</div>
            <div className="song-grid-delete">Delete</div>
          </div>
          {songs.map((song) => (
            <div key={song.id} className="song-grid-row">
              <div className="song-grid-title">{song.name}</div>
              <div className="song-grid-artist">{song.artist}</div>
              <div className="song-grid-popularity">{song.popularity}</div>
              <div className="song-grid-delete">
                <button onClick={() => onDelete(song.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistShowPage;
