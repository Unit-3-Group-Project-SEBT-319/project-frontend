import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryThumbnails from './CategoryHeader/CategoryThumbnails';
import PlaylistDropdown from '../../PlaylistDropDown/PlaylistDropDown';
import PlayMusicButton from '../../Button/PlayMusicButton';
import './categoryshowpage.css';

const CategoryShowPage = () => {
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
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

  const fetchPlaylists = async () => {
    try {
      const response = await fetch('http://localhost:4000/audify/playlists');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPlaylists(data.data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchPlaylists();
  }, [genre]);

  return (
    <div className="container">
      <CategoryThumbnails genre={genre} />
      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.trackId} className="list-group-item d-flex align-items-center">
            <img src={song.artworkUrl60.replace('60x60', '1000x1000')} alt={song.trackName} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
            <div className="flex-grow-1 ms-3">
              <div className="fw-bold">{song.trackName}</div>
              <div>{song.artistName}</div>
            </div>
            <div className="ms-3">{song.collectionName}</div>
            <PlayMusicButton song={song}/>
            <PlaylistDropdown
              songId={song.trackId}
              songData={song}
              playlists={playlists}
              onSuccess={() => console.log('Song added to playlist')}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryShowPage;
