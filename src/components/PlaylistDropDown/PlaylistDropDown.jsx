import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './playlistdropdown.css';

const PlaylistDropdown = ({ songId, songData, playlists, onSuccess }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const addSong = async (playlistId) => {
    if (!songData) {
      console.error('songData is undefined');
      return;
    }

    const payload = {
      playlistId: playlistId,
      songId: songId,
      songData: songData,
    };

    try {
      const response = await fetch(`http://localhost:4000/audify/playlists/${playlistId}/add-song`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        if (onSuccess) {
          onSuccess(data.data);
        }
        setIsDropdownVisible(false);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error adding song to playlist:', error);
    }
  };

  return (
    <div className="playlist-dropdown-container">
      <button
        className="add-to-playlist-btn"
        onClick={() => setIsDropdownVisible((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faCirclePlus} className='addtoplaylist-button' />
      </button>
      {isDropdownVisible && (
        <div className="playlist-dropdown">
          {playlists.map((playlist) => (
            <button
              key={playlist._id}
              className="playlist-item-btn"
              onClick={() => addSong(playlist._id)}
            >
              {playlist.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistDropdown;
