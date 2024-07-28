import React from 'react';
import { Link } from 'react-router-dom';
import './playlistcard.css';

const PlaylistCard = ({ playlist }) => (
  <Link to={`/playlist/${playlist._id}`} style={{ textDecoration: 'none' }}>
    <div className="d-flex align-items-center playlist-card">
      <img src={playlist.image} alt={playlist.name} className="playlist-image img-fluid" />
      <h2 className="ml-3 fs-6">{playlist.name}</h2>
    </div>
  </Link>
);

export default PlaylistCard;
