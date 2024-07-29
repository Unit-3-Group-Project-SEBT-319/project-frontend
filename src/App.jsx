import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home';
import PlaylistShowPage from './components/Playlist/PlaylistShowPage';
import CategoryShowPage from './components/Categories/Category/CategoryShowPage';
import { SongPlayerProvider } from './components/SongPlayer/SongPlayerContext'; 

const App = () => {
  return (
    <SongPlayerProvider> 
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:genre" element={<CategoryShowPage />} />
          <Route path="/playlist/:id" element={<PlaylistShowPage />} />
        </Routes>
        </div>
        </div>
    </SongPlayerProvider>
  );
};

export default App;





