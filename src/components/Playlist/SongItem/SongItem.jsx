import React from 'react';

const SongItem = ({ song }) => {
  return (
    <div className="song-display">
      <h2>{song.name}</h2>
      <p>{song.artist}</p>
      <button>Add to Playlist</button>
    </div>
  );
};

export default SongItem;
