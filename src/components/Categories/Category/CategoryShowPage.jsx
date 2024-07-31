import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CategoryThumbnails from './CategoryHeader/CategoryThumbnails';
import PlaylistDropdown from '../../PlaylistDropDown/PlaylistDropDown';
import PlayMusicButton from '../../Button/PlayMusicButton';
import Spinner from '../../SpinLoadingAnimation/Spinner';
import './categoryshowpage.css';

const CategoryShowPage = () => {
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const { genre } = useParams();
  const [loading, setLoading] = useState(true);
  const topRef = useRef(null);

  const fetchSongs = async () => {
    try {
      const response = await fetch(`http://localhost:4000/audify/search/genres?q=${encodeURIComponent(genre)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSongs(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
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
    setTimeout(() => {
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [genre]);

  return (
    <div ref={topRef} className="category-show-page">
      <CategoryThumbnails genre={genre} />
      <div className="song-grid">
        <div className="song-grid-header">
          <div></div>
          <div className="song-grid-title">Title</div>
          <div className="song-grid-artist">Artist</div>
          <div className="song-grid-album">Album</div>
          <div className="song-grid-actions"></div>
        </div>
        {loading ? (
          <div className="loading-container">
            <Spinner />
          </div>
        ) : songs.length > 0 ? (
          songs.map((song) => (
            <div key={song.trackId} className="song-grid-row">
              <img src={song.artworkUrl100.replace('100x100', '1000x1000')} alt={song.trackName} className="song-artwork" />
              <div className="song-grid-title">{song.trackName}</div>
              <div className="song-grid-artist">{song.artistName}</div>
              <div className="song-grid-album">{song.collectionName}</div>
              <div className="song-grid-actions">
                <PlayMusicButton song={song} />
                <PlaylistDropdown
                  songId={song.trackId}
                  songData={song}
                  playlists={playlists}
                  onSuccess={() => console.log('Song added to playlist')}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="no-songs">No songs available</div>
        )}
      </div>
    </div>
  );
};

export default CategoryShowPage;
