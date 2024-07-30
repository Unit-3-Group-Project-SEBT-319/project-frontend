import React, { useState, useEffect } from 'react';
import SongItem from './SongItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import './randomsongs.css'

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
    <div className='container custom-container pt-4'>
      <div className='d-flex refresh-button justify-content-end mb-3'>
        <FontAwesomeIcon 
          icon={faRotate} 
          onClick={getThreeSongs} 
          style={{ cursor: 'pointer', fontSize: '18px' }} 
        />
      </div>
      <div className='row'>
        {threeSongs.length > 0 ? (
          threeSongs.map((song) => 
            <div className='col-md-4 mb-4' key={song.trackId}>
              <SongItem songdata={song} playlists={playlists} />
            </div>
          )
        ) : (
          <p>No songs available</p>
        )}
      </div>
    </div>
  );
};

export default ThreeRandomSongs;
