import React, { useState, useEffect } from 'react';
import SongItem from './SongItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate} from '@fortawesome/free-solid-svg-icons'

const ThreeRandomSongs = () => {
  const [threeSongs, setThreeSongs] = useState([])

  const threeRandomSongsUrl = "http://localhost:4000/audify/search/randomsongs"

  const getThreeSongs = async () => {
    const response = await fetch(threeRandomSongsUrl)
    const data = await response.json()
    setThreeSongs(data)
  }

  useEffect(() => {
    getThreeSongs();
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
      {threeSongs.map((songIndex) =>
        <SongItem songdata={songIndex} key={songIndex.trackId}/>
      )}
    </div>
  );
};

export default ThreeRandomSongs;
