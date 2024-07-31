import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Home from './pages/Home';
import PlaylistShowPage from './components/Playlist/PlaylistShowPage';
import CategoryShowPage from './components/Categories/Category/CategoryShowPage';
import { SongPlayerProvider } from './components/SongPlayer/SongPlayerContext'; 
import defaultSongImage from '/pictures/defaultsong.png';
import AboutDeveloper from './components/Header/AboutDeveloper';

const defaultSong = {
  trackId: 0,
  trackName: "No song playing",
  artistName: "...",
  artworkUrl100: defaultSongImage,
  previewUrl: ""
};

const App = () => {
  const [playingSong, setPlayingSong] = useState(defaultSong);
  const songObject = { playingSong, setPlayingSong };
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
        setPlaylists(data.data || []);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  useEffect(() => {
    const updateNowPlayingHeight = () => {
      const nowPlayingElement = document.querySelector('.now-playing');
      if (nowPlayingElement) {
        const height = nowPlayingElement.offsetHeight;
        document.documentElement.style.setProperty('--now-playing-height', `${height}px`);
      }
    };

    updateNowPlayingHeight();
    window.addEventListener('resize', updateNowPlayingHeight);
    return () => {
      window.removeEventListener('resize', updateNowPlayingHeight);
    };
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

  const updatePlaylist = (id, updatedFields) => {
    setPlaylists(prevPlaylists =>
      prevPlaylists.map(playlist =>
        playlist._id === id ? { ...playlist, ...updatedFields } : playlist
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SongPlayerProvider value={songObject}>
      <div className="d-flex flex-column h-100">
        <div className="d-flex flex-grow-1">
          <Sidebar
            playlists={playlists}
            addNewPlaylist={addNewPlaylist}
          />
          <div className="content-container flex-grow-1 ps-3 pe-3 pt-3 pb-2 mb-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:genre" element={<CategoryShowPage />} />
              <Route path="/playlist/:id" element={<PlaylistShowPage playlists={playlists} updatePlaylist={updatePlaylist} />} />
              <Route path="/about-developer/:id" element={<AboutDeveloper />} />
            </Routes>
          </div>
        </div>
        <NowPlaying />
      </div>
    </SongPlayerProvider>
  );
};

export default App;
