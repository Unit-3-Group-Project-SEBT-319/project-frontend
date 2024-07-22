import React, { useState } from 'react';
// Get React and the useState hook to help keep track of and update information in this *component*
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Playlist from './components/Playlist';
import './App.css';

// MOCK PLACEHOLDERS
const mockPlaylists = [
  { _id: '1', name: 'Fav Songs', image: '', description: '' },
  { _id: '2', name: 'Chill Vibes', image: '', description: '' },
];

const mockSongs = [
  { id: '1', name: 'Song One', artist: 'Artist A', popularity: 75, album: 'Album A', image: '', preview_url: '' },
  { id: '2', name: 'Song Two', artist: 'Artist B', popularity: 60, album: 'Album B', image: '', preview_url: '' },
];

const App = () => {
// arrow function; creating a component called App
  const [playlists, setPlaylists] = useState(mockPlaylists);
// Create state for playlists, starting with mockPlaylists.
  const [songs, setSongs] = useState(mockSongs);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
// Create state to keep track of the currently selected playlist, starting with null
  const [searchResults, setSearchResults] = useState(mockSongs);
// Create state for search results, starting with mockSongs.
  const handleSearch = (e) => {
// function to search through songs based on what's searched.
    const query = e.target.value.toLowerCase();
// get the search and change it to lowercase 
    const results = songs.filter(song =>
      song.name.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
    );
// Filter through songs that match the search
    setSearchResults(results);
  };
// Update the results with the filtered songs.
  const createPlaylist = (name) => {
// function to create a playlist
    if (name) {
      setPlaylists([...playlists, { _id: Date.now().toString(), name, image: '', description: '' }]);
    }
  };
// Add the new playlist to the list with a unique ID.
// Doubt the date is needed though... idk yet
  const deletePlaylist = (id) => {
// function to remove a playlist by its ID
    setPlaylists(playlists.filter(pl => pl._id !== id));
// remove the playlist from the list.
    if (selectedPlaylist === id) setSelectedPlaylist(null);
  };
// If the deleted playlist was selected, deselect it.
  const addSongToPlaylist = (song, playlistId) => {
// function to add a song to a playlist
// MOCK adding song to playlist
    console.log("Added ${song.name} to playlist ${playlistId}");
  };

  const removeSongFromPlaylist = (songId, playlistId) => {
// function to remove a song from a playlist
// MOCK removing song from playlist
    console.log("Removed song with id ${songId} from playlist ${playlistId}");
  };

  return (
// RENDER the component
    <div className="app">
      <Navbar /> 
{/* adds in Navbar *component* */}
      <div className="main-content">
        <Sidebar
          handleSearch={handleSearch}
          createPlaylist={createPlaylist}
          playlists={playlists}
          setSelectedPlaylist={setSelectedPlaylist}
          deletePlaylist={deletePlaylist}
        />
{/* Adds the Sidebar *component* with props for search, creating, selecting, and deleting playlists */}
        <Playlist
          searchResults={searchResults}
          selectedPlaylist={selectedPlaylist}
          addSongToPlaylist={addSongToPlaylist}
          removeSongFromPlaylist={removeSongFromPlaylist}
        />
      </div>
    </div>
  );
};

export default App;
