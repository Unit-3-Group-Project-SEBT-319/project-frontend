import React from 'react';
import AddToPlayListButton from '../Button/AddToPlayListButton';
import PlayMusicButton from '../Button/PlayMusicButton';
import './songitem.css';

const SongItem = ({ songdata, playlists }) => {
  return (
    <div className='card song-item-card'>
      <div className="img-container">
        <img src={songdata.artworkUrl300.replace('300x300', '1000x1000')} alt={songdata.trackName} className="card-img-top threesongimages"/>
        <div className='overlay-buttons'>
          <PlayMusicButton song={songdata} />
        </div>
      </div>
      <div className='card-body'>
        <div className='song-details'>
          <div>
            <h5 className='card-title'>{songdata.trackName}</h5>
            <p className='card-text'>{songdata.artistName}</p>
          </div>
          <AddToPlayListButton
            songId={songdata.trackId}
            songData={songdata}
            playlists={playlists}
            onSuccess={() => console.log('Song added to playlist')}
          />
        </div>
      </div>
    </div>
  );
};

export default SongItem;
