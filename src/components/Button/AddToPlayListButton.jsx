// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import './AddToPlayListButton.css'; 

// const AddToPlayListButton = ({ songId, songData, playlists, onSuccess }) => {
//   const [selectedPlaylist, setSelectedPlaylist] = useState('');
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const addSong = async () => {
//     if (!selectedPlaylist) {
//       alert('Please select a playlist.');
//       return;
//     }

//     if (!songData) {
//       console.error('songData is undefined');
//       return;
//     }

//     const payload = {
//       playlistId: selectedPlaylist,
//       songId: songId,
//       songData: songData,
//     };

//     console.log('Selected Playlist:', selectedPlaylist);
//     console.log('Song ID:', songId);
//     console.log('Payload:', payload);

//     try {
//       const response = await fetch(`http://localhost:4000/audify/playlists/${selectedPlaylist}/add-song`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       console.log('Fetch Response:', response);

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Response Data:', data);
//         if (onSuccess) {
//           onSuccess(data.data);
//         }
//         setSelectedPlaylist(''); 
//         setIsDropdownVisible(false); 
//       } else {
//         console.error('Failed to add song to playlist:', response.statusText);
//         const errorData = await response.json();
//         console.error('Error Details:', errorData);
//       }
//     } catch (error) {
//       console.error('Error adding song to playlist:', error);
//     }
//   };

//   return (
//     <div className="add-to-playlist-container">

//       <button 
//         className="add-to-playlist-btn"
//         onClick={() => setIsDropdownVisible(prev => !prev)}
//       >
//         <FontAwesomeIcon icon={faCirclePlus} />
//       </button>

    
//       {/* {isDropdownVisible && (
//         <div className="dropdown">
//           <select
//             className="playlist-select"
//             onChange={(e) => setSelectedPlaylist(e.target.value)}
//             value={selectedPlaylist}
//           >
//             <option value="">Select Playlist</option>
//             {playlists.map(playlist => (
//               <option key={playlist._id} value={playlist._id}>
//                 {playlist.name}
//               </option>
//             ))}
//           </select>
//           <button className="submit-btn" onClick={addSong}>
//             Add to Playlist
//           </button>
//         </div>
//       )} */}


//     </div>
//   );
// };

// export default AddToPlayListButton;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './AddToPlayListButton.css';

const AddToPlayListButton = ({ onClick }) => (
  <button className="add-to-playlist-btn" onClick={onClick}>
    <FontAwesomeIcon icon={faCirclePlus} />
  </button>
);

export default AddToPlayListButton;

