import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongItem from './SongItem/SongItem'; 

const CategoryShowPage = () => {
  const { genre } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`http://localhost:4000/audify/genres/${genre}`);
        const data = await response.json();
        setSongs(data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSongs();
  }, [genre]);

  return (
    <div>
      <h1>{genre} Songs</h1>
      <ul>
        {songs.map((song) => (
          <SongItem key={song.trackId} song={song} />
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Back to Categories</button>
    </div>
  );
};

export default CategoryShowPage;

