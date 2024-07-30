import React from 'react';
import AddToPlayListButton from '../Button/AddToPlayListButton';
import PlayMusicButton from '../Button/PlayMusicButton';
import './songitem.css';

const SongItem = ({ songdata, playlists }) => {
  return (
    <div className='card song-item-card'>
      <img src={songdata.artworkUrl300.replace('300x300', '1000x1000')} alt={songdata.trackName} className="card-img-top threesongimages"/>
      <div className='card-body'>
        <h5 className='card-title'>{songdata.trackName}</h5>
        <p className='card-text'>{songdata.artistName}</p>
        <div className='button-group'>
          <PlayMusicButton song={songdata} />
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
