import React, { useState, useEffect } from 'react';
import SongItem from './SongItem';
import AddToPlayListButton from '../Button/AddToPlayListButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const ThreeRandomSongs = () => {
  const [threeSongs, setThreeSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const threeRandomSongsUrl = "http://localhost:4000/audify/search/randomsongs";
  const playlistsUrl = "http://localhost:4000/audify/playlists";

  const getThreeSongs = async () => {
    const response = await fetch(threeRandomSongsUrl);
    const data = await response.json();
    setThreeSongs(data);
  };

  const fetchPlaylists = async () => {
    const response = await fetch(playlistsUrl);
    const data = await response.json();
    setPlaylists(data.data);
  };

  useEffect(() => {
    getThreeSongs();
    fetchPlaylists();
  }, []);

  return (
    <div>
      <div className='refresh-button'>
        <FontAwesomeIcon 
          icon={faRotate} 
          onClick={getThreeSongs} 
          style={{ cursor: 'pointer', fontSize: '24px' }} 
        />
      </div>
      {threeSongs.map((song) => 
        <div key={song.trackId}>
          <SongItem songdata={song} />
          <AddToPlayListButton
            songId={song.trackId}
            songData={song}
            playlists={playlists}
            onSuccess={() => console.log('Song added to playlist')}
          />
        </div>
      )}
    </div>
  );
};

export default ThreeRandomSongs;
