import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PlaylistShowPage = () => {
  const { playlistId } = useParams()
  const [playlist, setPlaylist] = useState(null)
  const [songs, setSongs] = useState([])

  const URL_PLAYLIST = `http://localhost:4000/audify/playlists/${playlistId}`
  const URL_SONGS = `http://localhost:4000/audify/playlists/${playlistId}/songs`

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(URL_PLAYLIST);
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    }

    const fetchSongs = async () => {
      try {
        const response = await fetch(URL_SONGS)
        const data = await response.json()
        setSongs(data)
      } catch (error) {
        console.error('Error fetching songs:', error)
      }
    }

    fetchPlaylist()
    fetchSongs()
  }, [playlistId])

  // Delete Song from Playlist
  const deleteSongPlaylist = async (songId) => {
    try {
      const response = await fetch(`http://localhost:4000/audify/playlists/${playlistId}/remove-song/${songId}`, {
        method: 'DELETE',
      })
      setSongs(songs.filter(song => song.id !== songId))
    } catch (error) {
      console.error("Error deleting song:", error)
    }
  }
  // Delete Playlist
  const deletePlaylist = async () => {
    try {
      const response = await fetch(URL_PLAYLIST, {
        method: 'DELETE',
      })
    } catch (error) {
      console.error('Error deleting playlist:', error)
    }
  }
  
  return (
    <div className="playlist-show-page">
      <div className="playlist-sidebar">
        <div className="playlist-section">
          <h2>Playlists</h2>
          {/* Add your playlist links or items here */}
        </div>
        <div className="now-playing">
          <h2>Now Playing</h2>
          {/* Add now playing content here */}
        </div>
      </div>
      <div className="playlist-content">
        <h1>{playlist.name}</h1>
        <div className="song-grid">
          <div className="song-grid-header">
            <div className="song-grid-title">Title</div>
            <div className="song-grid-artist">Artist</div>
            <div className="song-grid-popularity">Popularity</div>
            <div className="song-grid-delete">Delete</div>
          </div>
          {songs.map((song) => (
            <div key={song.id} className="song-grid-row">
              <div className="song-grid-title">{song.name}</div>
              <div className="song-grid-artist">{song.artist}</div>
              <div className="song-grid-popularity">{song.popularity}</div>
              <div className="song-grid-delete">
                <button onClick={() => deleteSongPlaylist(song.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistShowPage;
