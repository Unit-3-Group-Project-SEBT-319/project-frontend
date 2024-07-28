import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlaylistShowPage.css';

const PlaylistShowPage = () => {
  const { id } = useParams(); 
  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL_PLAYLIST = `http://localhost:4000/audify/playlists/${id}`;
  const URL_SONGS = `http://localhost:4000/audify/playlists/${id}/songs`;

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        console.log(`Fetching playlist from: ${URL_PLAYLIST}`);
        const response = await fetch(URL_PLAYLIST);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched playlist:', data);
        setPlaylist(data.data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchSongs = async () => {
      try {
        console.log(`Fetching songs from: ${URL_SONGS}`);
        const response = await fetch(URL_SONGS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched songs:', data);
        setSongs(data.data || []);
      } catch (error) {
        console.error('Error fetching songs:', error);
        setError(error.message);
      }
    };

    fetchPlaylist();
    fetchSongs();
  }, [id]);

  // Delete Song from Playlist
  const deleteSongFromPlaylist = async (songId) => {
    try {
      const deleteURL = `http://localhost:4000/audify/playlists/${id}/remove-song/${songId}`;
      console.log(`Deleting song from: ${deleteURL}`);
      await fetch(deleteURL, {
        method: 'DELETE',
      });
      setSongs(songs.filter(song => song._id !== songId));
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  // Delete Playlist
  const deletePlaylist = async () => {
    try {
      console.log(`Deleting playlist from: ${URL_PLAYLIST}`);
      await fetch(URL_PLAYLIST, {
        method: 'DELETE',
      });
      window.location.href = '/'; // redirect after deletion
    } catch (error) {
      console.error('Error deleting playlist:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!playlist) {
    return <div>No Playlist Found</div>;
  }

  return (
    <div className="playlist-show-page">
      <div className="playlist-sidebar">
        <div className="playlist-section">
          <h2>Playlists</h2>
          {/* Add playlist links or items here */}
        </div>
        <div className="now-playing">
          <h2>Now Playing</h2>
          {/* Add now playing content here */}
        </div>
      </div>
      <div className="playlist-content">
        <h1>{playlist.name}</h1>
        <img src={playlist.image} alt={playlist.name} className="playlist-image img-fluid" />
        <p>{playlist.description}</p>
        <div className="song-grid">
          <div className="song-grid-header">
            <div className="song-grid-title">Title</div>
            <div className="song-grid-artist">Artist</div>
            <div className="song-grid-popularity">Popularity</div>
            <div className="song-grid-delete">Delete</div>
          </div>
          {songs.length > 0 ? (
            songs.map((song) => (
              <div key={song._id} className="song-grid-row">
                <img src={song.artworkUrl60} alt={song.trackName} />
                <div className="song-grid-title">{song.trackName}</div>
                <div className="song-grid-artist">{song.artistName}</div>
                <div className="song-grid-popularity">{song.popularity}</div>
                <div className="song-grid-delete">
                  <button onClick={() => deleteSongFromPlaylist(song._id)}>🗑️</button>
                </div>
              </div>
            ))
          ) : (
            <div>No songs available</div>
          )}
        </div>
        <button onClick={deletePlaylist}>Delete Playlist</button>
      </div>
    </div>
  );
};

export default PlaylistShowPage;
