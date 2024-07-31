import React, { createContext, useState, useRef, useEffect } from 'react';

export const SongPlayerContext = createContext();

export const SongPlayerProvider = ({ children }) => {
  const [playingSong, setPlayingSong] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleSetPlayingSong = (song) => {
    setPlayingSong(song);
    setPlaying(true);
  };

  useEffect(() => {
    if (playingSong && audioRef.current) {
      audioRef.current.seekTo(0);
      setPlaying(true);
    }
  }, [playingSong]);

  return (
    <SongPlayerContext.Provider value={{ playingSong, setPlayingSong: handleSetPlayingSong, playing, setPlaying, audioRef }}>
      {children}
    </SongPlayerContext.Provider>
  );
};



