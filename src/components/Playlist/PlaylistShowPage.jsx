import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleXmark, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import PlayMusicButton from '../Button/PlayMusicButton';
import InlineEdit from '../InLineEdit/InLineEdit';
import './PlaylistShowPage.css';

const PlaylistShowPage = ({ playlists, updatePlaylist }) => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const URL_PLAYLIST = `http://localhost:4000/audify/playlists/${id}`;
  const URL_SONGS = `http://localhost:4000/audify/playlists/${id}/songs`;

  const imageOptions = [
    'https://i.ibb.co/S7brgLp/image.png',
    'https://i.ibb.co/ZSMp6bh/image-4.png',
    'https://i.ibb.co/KwXvwSv/image-3.png',
    'https://i.ibb.co/g4FgTw0/image-2.png',
    'https://i.ibb.co/dGJJpjS/image-1.png'
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
      updatePlaylist(id, updatedFields); 
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
      window.location.href = '/'; 
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
      <div className="playlist-header">
        <div className="playlist-image-container">
          <img
            src={playlist.image}
            alt="Playlist Thumbnail"
            className="playlist-thumbnail"
            onClick={() => setShowGallery(prev => !prev)}
          />
          {showGallery && (
            <div className="image-gallery active">
              {imageOptions.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => {
                    handleUpdatePlaylist({ image: img });
                    setShowGallery(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="playlist-info">
          <h1 className="playlist-title">
            {isEditingName ? (
              <InlineEdit
                value={playlist.name}
                onSetValue={(newValue) => {
                  handleUpdatePlaylist({ name: newValue });
                  setIsEditingName(false);
                }}
                onCancel={() => setIsEditingName(false)}
                className="playlist-title-edit"
              />
            ) : (
              <>
                <span>{playlist.name}</span>
                <FontAwesomeIcon
                  icon={faPen}
                  className={`edit-icon-name ${isEditingName ? 'hidden' : ''}`}
                  onClick={() => setIsEditingName(true)}
                />
              </>
            )}
          </h1>
          <p className="playlist-description">
            {isEditingDescription ? (
              <InlineEdit
                value={playlist.description}
                onSetValue={(newValue) => {
                  handleUpdatePlaylist({ description: newValue });
                  setIsEditingDescription(false);
                }}
                onCancel={() => setIsEditingDescription(false)}
                className="playlist-description-edit"
              />
            ) : (
              <>
                <span>{playlist.description}</span>
                <FontAwesomeIcon
                  icon={faPen}
                  className={`edit-icon-description ${isEditingDescription ? 'hidden' : ''}`}
                  onClick={() => setIsEditingDescription(true)}
                />
              </>
            )}
          </p>
        </div>
        <div className="delete-playlist-container">
          <button
            className="delete-playlist-btn"
            onClick={deletePlaylist}
            title="Delete Playlist"
          >
            <FontAwesomeIcon icon={faX} size="lg" style={{ color: "red" }} />
          </button>
        </div>
      </div>
      <div className="song-grid">
        <div className="song-grid-header">
          <div></div> 
          <div className="song-grid-title">Title</div>
          <div className="song-grid-artist">Artist</div>
          <div></div> 
        </div>
        {songs.length > 0 ? (
          songs.map((song) => (
            <div key={song._id} className="song-grid-row">
              <img src={song.artworkUrl100.replace('100x100', '1000x1000')} alt={song.trackName} className="song-artwork" />
              <div className="song-grid-title">{song.trackName}</div>
              <div className="song-grid-artist">{song.artistName}</div>
              <div></div> 
              <div className="song-grid-delete">
                <PlayMusicButton song={song} />
                <button className="delete-song-btn" onClick={() => deleteSongFromPlaylist(song._id)}><FontAwesomeIcon icon={faTrash} /></button>
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

export default PlaylistShowPage;
