import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryThumbnails from './CategoryHeader/CategoryThumbnails'

const CategoryShowPage = () => {
  const [songs, setSongs] = useState([]);
  const { genre } = useParams();

  const fetchSongs = async () => {
    try {
      const response = await fetch(`http://localhost:4000/audify/search/genres?q=${encodeURIComponent(genre)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSongs(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [genre]);

  return (
<div>
      <h1>Songs in {genre} genre</h1>
      <CategoryThumbnails genre={genre}/>
      <ul>
        {songs.map((song) => (
          <li key={song.trackId}>
            <div>
              <img src={song.artworkUrl60} alt={song.trackName} />
              <div>{song.trackName}</div>
              <div>{song.artistName}</div>
              <audio controls>
                <source src={song.previewUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryShowPage;
