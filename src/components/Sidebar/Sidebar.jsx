import React from 'react'
import import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Playlist />
      <Categories />
      <RecommendedSongs />
      <NowPlaying />
    </div>
  );
};

export default Sidebar;
