import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlaylistShowPage from './components/Playlist/PlaylistShowPage'
import CategoryShowPage from './components/Categories/Category/CategoryShowPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:genre" element={<CategoryShowPage />} />
        <Route path="/playlist/:playlistId" element={<PlaylistShowPage />} />
      </Routes>
  );
};

export default App;



