import React from 'react';
import './songitem.css'

const SongItem = ({ songdata }) => {
  return (
    <div className='song-item-card'>
      <img src={songdata.artworkUrl300.replace('300x300', '1000x1000')} alt={songdata.trackName} className="threesongimages"/>
      <h2>{songdata.trackName}</h2>
      <h4>{songdata.primaryGenreName}</h4>
    </div>
  );
};

export default SongItem;


