import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayMusicButton from '../Button/PlayMusicButton';
import InlineEdit from '../InLineEdit/InLineEdit';
import './PlaylistShowPage.css';

const PlaylistShowPage = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL_PLAYLIST = `http://localhost:4000/audify/playlists/${id}`;
  const URL_SONGS = `http://localhost:4000/audify/playlists/${id}/songs`;

  const imageOptions = [
    'https://i.ibb.co/FHYgVdp/Audify-Playlist-Thumbnail1.png'
  ];

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(URL_PLAYLIST);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlaylist(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchSongs = async () => {
      try {
        const response = await fetch(URL_SONGS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSongs(data.data || []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlaylist();
    fetchSongs();
  }, [id]);

  const handleUpdatePlaylist = async (updatedFields) => {
    try {
      const response = await fetch(URL_PLAYLIST, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      });
      const data = await response.json();
      setPlaylist(data.data);
    } catch (error) {
      console.error('Error updating playlist:', error);
    }
  };

  const deleteSongFromPlaylist = async (songId) => {
    try {
      const deleteURL = `http://localhost:4000/audify/playlists/${id}/remove-song/${songId}`;
      await fetch(deleteURL, {
        method: 'DELETE',
      });
      setSongs(songs.filter(song => song._id !== songId));
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  const deletePlaylist = async () => {
    try {
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
      </div>
      <div className="playlist-content">
        <InlineEdit
          value={playlist.name}
          onSetValue={(newValue) => handleUpdatePlaylist({ name: newValue })}
        />
        <InlineEdit
          value={playlist.image}
          onSetValue={(newValue) => handleUpdatePlaylist({ image: newValue })}
          type="select"
          options={imageOptions}
        />
        <InlineEdit
          value={playlist.description}
          onSetValue={(newValue) => handleUpdatePlaylist({ description: newValue })}
        />
        <div className="song-grid">
          <div className="song-grid-header">
            <div className="song-grid-title">Title</div>
            <div className="song-grid-artist">Artist</div>
            <div className="song-grid-delete">Delete</div>
          </div>
          {songs.length > 0 ? (
            songs.map((song) => (
              <div key={song._id} className="song-grid-row">
                <img src={song.artworkUrl100.replace('100x100', '1000x1000')} alt={song.trackName} className="song-artwork" />
                <div className="song-grid-title">{song.trackName}</div>
                <div className="song-grid-artist">{song.artistName}</div>
                <div className="song-grid-delete">
                  <PlayMusicButton song={song} />
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
