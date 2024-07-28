import React, { useState, useEffect } from "react";
import Categories from '../components/Categories/Categories';
import PlaylistCard from '../components/Playlist/PlaylistCard';
import SearchBarContainer from "../components/SearchBar/SearchBarContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './home.css';

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('http://localhost:4000/audify/playlists');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setPlaylists(data.data || []);
      } catch (error) {
        console.error('Error fetching all playlists:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  const addNewPlaylist = async () => {
    try {
      const response = await fetch('http://localhost:4000/audify/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlaylists(prevPlaylists => [...prevPlaylists, data.data]);
    } catch (error) {
      console.log('Error creating playlist:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <SearchBarContainer/>
        <div className="d-flex align-items-center playlist-card"> 
          <h2>Your Library</h2>
          <button onClick={addNewPlaylist}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </div>
        <div className="playlists-container">
          {playlists.length > 0 ? (
            playlists.map(playlist => (
              <PlaylistCard key={playlist._id} playlist={playlist} />
            ))
          ) : (
            <div>Create your playlist</div>
          )}
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Home;

