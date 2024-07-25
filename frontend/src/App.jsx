import React from 'react';
import '../App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Music App</h1>
      </header>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/playlist/:id" element={<PlaylistShowPage />} />
          <Route path="/category/:name" element={<Categories />} />
          <Route path="/" element={<RecommendedSongs />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
