import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMusic, faPlus } from '@fortawesome/free-solid-svg-icons';
import UserButton from './UserButton';
import './Sidebar.css';

const Sidebar = ({ playlists, addNewPlaylist }) => {
  return (
    <div className="sidebar mt-3 ms-3 pb-5">
      <div className="sidebar-header">
        <div className="container">
          <div className="row d-flex">
            <div className="col-sm">
              <h1 className="sidebar-title">Audify</h1>
            </div>
            <div className="col-sm d-flex justify-content-end usericon">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-nav">
        <ul>
          <li className='position-sticky'>
            <Link to="/" className="sidebar-link">
              <FontAwesomeIcon icon={faHome} className='home-button-sidebar' />
              <span className='home-text'>Home</span>
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
                <div className="playlist-text">
                  <span className="playlist-name">{playlist.name}</span>
                  <span className='playlist-hardcode'>Playlist</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
