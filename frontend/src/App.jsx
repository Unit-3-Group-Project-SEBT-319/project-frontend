import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import CategoryShowPage from './components/Categories/Category/CategoryShowPage';
import Categories from './components/Categories/Categories';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:genre" element={<CategoryShowPage />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Routes>
  );
};

export default App;



