import React from 'react';
import Playlist from './Playlist';
import Categories from './Categories';
import RecommendedSongs from './RecommendedSongs';
import NowPlaying from './NowPlaying';

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
