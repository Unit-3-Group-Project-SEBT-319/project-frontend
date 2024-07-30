import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMusic, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('http://localhost:4000/audify/playlists');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlaylists(data.data || []);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, [])

  const addNewPlaylist = async () => {
    try {
      const response = await fetch('http://localhost:4000/audify/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlaylists(prevPlaylists => [...prevPlaylists, data.data]);
    } catch (error) {
      console.log('Error creating playlist:', error);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sidebar">
    <h1>Audify</h1>
    <div className="sidebar-nav">
      <ul>
        <li className='position-sticky'>
          <Link to="/" className="sidebar-link">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <div className="library-section position-sticky">
            <FontAwesomeIcon icon={faMusic} className="library-icon" />
            <p className="library-text">My Library</p>
            <button onClick={addNewPlaylist} className="add-playlist-button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </li>
          {playlists.map((playlist) => (
            <li key={playlist._id} className="playlist-item">
              <Link to={`/playlist/${playlist._id}`} className="sidebar-link">
                {playlist.image && (
                  <img src={playlist.image} alt={playlist.name} className="playlist-sidebar-image" />
                )}
                <span className="playlist-name">{playlist.name}</span>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
}

export default Sidebar;
