import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMusic, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ playlists, addNewPlaylist }) => {
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
  );
};

export default Sidebar;
