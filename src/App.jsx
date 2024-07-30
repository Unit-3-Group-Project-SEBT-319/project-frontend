import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Home from './pages/Home';
import PlaylistShowPage from './components/Playlist/PlaylistShowPage';
import CategoryShowPage from './components/Categories/Category/CategoryShowPage';
import { SongPlayerProvider } from './components/SongPlayer/SongPlayerContext'; 
import defaultSongImage from '/pictures/defaultsong.png';

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

  return (
    <SongPlayerProvider value={songObject}>
        <div className="d-flex flex-column h-100">
          <div className="d-flex flex-grow-1">
            <Sidebar />
            <div className="content-container flex-grow-1 pb-5 ps-3 pe-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:genre" element={<CategoryShowPage />} />
                <Route path="/playlist/:id" element={<PlaylistShowPage />} />
              </Routes>
            </div>
          </div>
          <NowPlaying />
        </div>
    </SongPlayerProvider>
  );
};

export default App;
