import React, { useState, useEffect } from 'react';
import SongItem from './SongItem';
import AddToPlayListButton from '../Button/AddToPlayListButton';
import PlayMusicButton from '../Button/PlayMusicButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const ThreeRandomSongs = () => {
  const [threeSongs, setThreeSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const threeRandomSongsUrl = "http://localhost:4000/audify/search/randomsongs";
  const playlistsUrl = "http://localhost:4000/audify/playlists";

  const getThreeSongs = async () => {
    try {
      const response = await fetch(threeRandomSongsUrl);
      if (!response.ok) {
        throw new Error(`Error fetching songs: ${response.statusText}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Expected an array of songs');
      }
      setThreeSongs(data);
    } catch (error) {
      console.error('Failed to fetch random songs:', error);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const response = await fetch(playlistsUrl);
      if (!response.ok) {
        throw new Error(`Error fetching playlists: ${response.statusText}`);
      }
      const data = await response.json();
      setPlaylists(data.data);
    } catch (error) {
      console.error('Failed to fetch playlists:', error);
    }
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
      {threeSongs.length > 0 ? (
        threeSongs.map((song) => 
          <div key={song.trackId}>
            <SongItem songdata={song} />
            <PlayMusicButton song={song}/>
            <AddToPlayListButton
              songId={song.trackId}
              songData={song}
              playlists={playlists}
              onSuccess={() => console.log('Song added to playlist')}
            />
          </div>
        )
      ) : (
        <p>No songs available</p>
      )}
    </div>
  );
};

export default ThreeRandomSongs;
  