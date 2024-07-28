import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const AddToPlaylistButton = ({ songId, playlists, onSuccess }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("")

  const addSong = async () => {
    if (!selectedPlaylist) {
      alert('Please select a playlist.')
      return
    }
    try {
      const response = await fetch('http://localhost:4000/audify/playlists/add-song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playlistId: selectedPlaylist,
          songId: songId,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        if (onSuccess) {
          onSuccess(data.data)
        }
      } else {
        console.error('Failed to add song to playlist')
      }
    } catch (error) {
      console.error('Error adding song to playlist:', error)
    }
  };

  return (
    <div>
      <select
        onChange={(e) => setSelectedPlaylist(e.target.value)}
        value={selectedPlaylist}
      >
        <option value="">Select Playlist</option>
        {playlists.map(playlist => (
          <option key={playlist._id} value={playlist._id}>
            {playlist.name}
          </option>
        ))}
      </select>
      <button onClick={addSong}><FontAwesomeIcon icon={faCirclePlus} /></button>
    </div>
  );
};

export default AddToPlaylistButton