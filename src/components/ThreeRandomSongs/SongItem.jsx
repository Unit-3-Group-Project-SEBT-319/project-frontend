import React from 'react';

const SongItem = ({ songdata }) => {
  return (
    <div className='song-item-card'>
      <img src={songdata.artworkUrl300} alt={songdata.trackName} />
      <h2>{songdata.trackName}</h2>
      <h4>{songdata.primaryGenreName}</h4>
    </div>
  );
};

export default SongItem;

