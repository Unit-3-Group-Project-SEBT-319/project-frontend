import React from 'react';
import { useState, useEffect } from "react";
import Categories from '../components/Categories/Categories';
import PlaylistCard from '../components/Playlist/PlaylistCard';

// To get all playlists and show under the "your library" on main page

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:4000/audify/playlists');
        setPlaylists(response.data.data)
      } catch (error) {
        console.error('Error fetching all playlists:', error);
      }
    };
    
    fetchPlaylists();
  }, []);

  const addNewPlaylist = async () => {
    try {
      const response = await axios.post('http://localhost:4000/audify/playlists', {
        name: newPlaylistName,
        description: newPlaylistDescription,
      });
      setPlaylists([...playlists, response.data.data])
      setShowForm(false)
      setNewPlaylistName('')
    } catch (error) {
      console.error('Error creating playlist:', error)
    }
  };

  return (
    <div>
      <div>
        <h2>Your Library</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Create Playlist'}
        </button>
        {showForm && (
          <div>
            <input
              type="text"
              placeholder="Playlist Name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <button onClick={addNewPlaylist}>Add Playlist</button>
          </div>
        )}
        {playlists.map(playlist => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
      <Categories/>
    </div>
  )
 }
export default Home;
