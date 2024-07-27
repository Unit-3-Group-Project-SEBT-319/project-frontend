import React from 'react';

const SongItem = ({ song }) => {
  return (
    <div className='song-item'>
      <div className='song-image'>
        <img src={song.artworkUrl60} alt={song.trackName} />
      </div>
      <div className='song-details'>
        <div className='song-name'>{song.trackName}</div>
        <div className='song-artist'>{song.artistName}</div>
      </div>
      <div className='song-album'>{song.collectionName}</div>
      <div className='song-actions'>
        <div className='favorite-star'>★</div>
        <div className='add-button'>+</div>
      </div>
    </div>
  );
};

export default SongItem;
