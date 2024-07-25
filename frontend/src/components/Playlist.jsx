import React from 'react';

const Playlist = () => {
  return (
    <div className="playlist">
      {/* Display the list of playlists here */}
      <h3>Your Library</h3> <span> + (font awesome)</span>
      .map over the playlist database and pass in the playlist library item
      <PlayListLibraryItem/>
    </div>
  );
};

export default Playlist;
