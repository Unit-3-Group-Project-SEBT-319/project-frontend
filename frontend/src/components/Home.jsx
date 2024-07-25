import React from 'react';
import './HomePage.css'; // Assuming the CSS file is named HomePage.css

const HomePage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Your Library</li>
            <li>Playlist 1</li>
            <li>Playlist 2</li>
            <li>Playlist 3</li>
          </ul>
        </div>
        <div className="player">
          {/* Player content here */}
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="search">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
          </div>
          <div className="headline">HEADLINE</div>
        </div>
        <div className="recommended-songs">
          <div className="song">+</div>
          <div className="song">+</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
