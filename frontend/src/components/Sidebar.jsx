import React from "react";
// brings in the React library, which is necessary for creating React *components*
import "./Sidebar.css";
// brings in the CSS file for styling the Sidebar *component*

const Sidebar = ({
  handleSearch,
  createPlaylist,
  playlists,
  setSelectedPlaylist,
  deletePlaylist,
}) => (
// defines a *component* named Sidebar using DESTRUCTURING to take in five props.
  <div className="sidebar">
    <input type="text" placeholder="Search..." onChange={handleSearch} />
{/* This creates a text input bar for searching. When something is searched (or "CHANGED"), the 'handleSearch' function is called. */}
    <button onClick={() => createPlaylist(prompt("Enter playlist name:"))}>
      Create Playlist
    </button>
{/* Creates a button called "Create Playlist". When clicked, you're prompted to enter a playlist name and then calls the *createPlaylist* function with that name. */}
    <ul>
      {playlists.map((pl) => (
// This takes each playlist from the playlists list and creates a new item in the list for it.
        <li key={pl._id}>
{/* Each LI uses pl._id (MONGODB) as a unique key to help React manage list updates */}
          {pl.name}
{/* The name of the playlist */}
          <button onClick={() => setSelectedPlaylist(pl._id)}>Select</button>
{/* This button calls *setSelectedPlaylist* with the playlist's ID when clicked to select and display list/info */}
          <button onClick={() => deletePlaylist(pl._id)}>Delete</button>
{/* This button calls *deletePlaylist* with the playlist's ID when clicked to delete it */}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
// exports the Sidebar *component* as the default export from this module, allowing it to be imported into other files.