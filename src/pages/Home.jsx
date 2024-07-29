import React, { useState, useEffect } from "react";
import Categories from '../components/Categories/Categories';
// import PlaylistCard from '../components/Playlist/PlaylistCard';
import SearchBarContainer from "../components/SearchBar/SearchBarContainer";
import RandomSongs from "../components/ThreeRandomSongs/RandomSongs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { SongPlayerContext } from '../components/SongPlayer/SongPlayerContext';
import NowPlaying from '../components/NowPlaying/NowPlaying';
import './home.css';
import defaultSongImage from '/pictures/defaultsong.png'; 

const defaultSong = {
  trackId: 0,
  trackName: "No song playing",
  artistName: "...",
  artworkUrl100: defaultSongImage, 
  previewUrl: ""
};

const Home = () => {
  // const [playlists, setPlaylists] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [playingSong, setPlayingSong] = useState(defaultSong);

  const songObject = { playingSong, setPlayingSong };

  return (
    <SongPlayerContext.Provider value={songObject}>
      <div>
        <SearchBarContainer />
        <div className="d-flex align-items-center playlist-card">
        </div>
        <RandomSongs />
        <Categories />
        <NowPlaying />
      </div>
    </SongPlayerContext.Provider>
  );
};

export default Home;
