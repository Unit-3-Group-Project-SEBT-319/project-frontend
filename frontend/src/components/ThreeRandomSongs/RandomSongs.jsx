import React, { useState } from 'react';

const RecommendedSongs = () => {
  const [threeSongs, setThreeSongs] = useState([])

  const threeRandomSongsUrl = "http://localhost:4000/audify/randomsongs"

  const getThreeSongs = async () => {
          const response = await fetch(threeRandomSongsUrl)
          const data = await response.json()
          setThreeSongs(data)
      }

  return (
    <div>

    </div>
  );
};

export default RecommendedSongs;
