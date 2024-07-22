// Potential popularity?
// const getPopularSongs = (songs) => {
//   return songs.filter(song => song.popularity >= 70);
// };


import React from "react";
// Bring in React to use for building the component.
import "./Playlist.css";
// Bring in the CSS file to style this component.

const Playlist = ({
  searchResults,
  selectedPlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist,
}) => (
// Creates component called Playlist that uses the provided functions and data.
  <div className="playlist">
    {selectedPlaylist ? (
// Checks if a playlist is selected
      <>
        <h2>Playlist Details</h2>
        <ul>
          {searchResults.map((track) => (
// Goes through each item in the searchResults list (ITERATES)
            <li key={track.id}>
{/* Make a list item for each track with a unique key. */}
              {track.name} by {track.artist}
{/* Shows track name and artist */}
              <button
                onClick={() => addSongToPlaylist(track, selectedPlaylist)}
              >
                Add
              </button>
{/* Button that adds the track to the playlist when clicked. */}
              <button
                onClick={() =>
                  removeSongFromPlaylist(track.id, selectedPlaylist)
                }
              >
                Remove
              </button>
{/* Button that removes the track from the playlist when clicked. */}
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p>Select a playlist to view tracks</p>
    )}
  </div>
);

export default Playlist;
// Make the Playlist *component* available for use in other parts of the app.
