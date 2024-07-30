import React, { useState, useEffect } from "react";
import Categories from '../components/Categories/Categories';
// import PlaylistCard from '../components/Playlist/PlaylistCard';
import SearchBarContainer from "../components/SearchBar/SearchBarContainer";
import RandomSongs from "../components/ThreeRandomSongs/RandomSongs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './home.css';

const Home = () => {
  // const [playlists, setPlaylists] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  return (
      <div>
        <SearchBarContainer />
        <div className="d-flex align-items-center playlist-card">
        </div>
        <RandomSongs />
        <Categories />
      </div>
  )
}

export default Home;
